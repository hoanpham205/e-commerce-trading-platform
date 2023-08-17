/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.security;

import com.ou.dto.JwtResponse;
import java.io.Serializable;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.annotation.PropertySources;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import com.ou.dto.JwtResponse;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;

/**
 *
 * @author ADMIN
 */
@Component
@PropertySources({
    @PropertySource("classpath:configs.properties")
})
public class JwtTokenProvider implements Serializable {

    @Value("${app.jwt-secret}")
    private String JwtSecret;

    @Value("${app.jwt-expiration-milliseconds}")
    private long JwtExpirationDate;

    private static final long REFRESH_TOKEN_EXPIRATION_DATE = 30 * 24 * 60 * 60 * 1000;

    // generate JWT token
    public JwtResponse generateToken(UserDetails userDetails) {
        String username = userDetails.getUsername();
        Date currentDate = new Date();

        Date expireDate = new Date(currentDate.getTime() + JwtExpirationDate);

        String accessToken = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(expireDate)
                .signWith(key())
                .compact();

        String refreshToken = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(currentDate)
                .setExpiration(new Date(currentDate.getTime() + REFRESH_TOKEN_EXPIRATION_DATE))
                .signWith(key())
                .compact();

        JwtResponse jwtResponse = new JwtResponse(accessToken, refreshToken, "Bearer");

        return jwtResponse;
    }

    private Key key() {

        return Keys.secretKeyFor(SignatureAlgorithm.HS256);
    }

    // get username from JWT token
    public String getUsername(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody();

        String username = claims.getSubject();
        return username;
    }

    // validate token
    public boolean validateToken(String token) {

        Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parse(token);
        return true;

    }

    public boolean isTokenExpired(String token) {
        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key())
                .build()
                .parseClaimsJws(token)
                .getBody();

        Date expirationDate = claims.getExpiration();
        Date currentDate = new Date();

        return expirationDate.before(currentDate);
    }

    public JwtResponse refreshToken(String refreshToken) {
        Date currentDate = new Date();

        Date expireDate = new Date(currentDate.getTime() + JwtExpirationDate);
        if (validateToken(refreshToken)) {
            try {
                String username = getUsername(refreshToken);
                String accessToken = Jwts.builder()
                        .setSubject(username)
                        .setIssuedAt(new Date())
                        .setExpiration(expireDate)
                        .signWith(key())
                        .compact();

                JwtResponse jwtResponse = new JwtResponse(accessToken, refreshToken, "Bearer");
                return jwtResponse;
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            throw new RuntimeException("Refresh token is invalid");
        }
        return null;
    }

}

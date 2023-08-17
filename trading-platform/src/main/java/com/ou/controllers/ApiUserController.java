/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.dto.JwtResponse;
import com.ou.dto.logindto;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.security.JwtTokenProvider;
import com.ou.service.impl.userServiceImpl;
import com.ou.service.storeService;
import com.ou.service.userService;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.velocity.tools.config.ValidScope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ADMIN
 */
@RestController
@RequestMapping("/api")
public class ApiUserController {

    @Autowired
    private userService userService;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private storeService storeService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @DeleteMapping("/user/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") int id) {
        if (storeService.getStoreByUserID(userService.getUserById(id)) != null) {
            this.userService.deleteAcount(id);
        } else {
            storeService.deleteProductByUserId(userService.getUserById(id));
            this.userService.deleteAcount(id);

        }
    }

    @PostMapping("/requestment/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void requestment(@PathVariable(value = "id") int id) {
        storeService.updateStore(storeService.getStoreByUserID(userService.getUserById(id)));
        userService.updateRoleUser(userService.getUserById(id));
    }

    @PostMapping("/register/")
    @CrossOrigin
    public ResponseEntity<Users> register(@RequestBody Users user) {
        return new ResponseEntity<>(this.userService.addUser(user), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody logindto logindto, HttpServletResponse response) throws Exception {
        authenticate(logindto.getUsername(), logindto.getPassword());
        System.out.println("com.ou.controllers.ApiUserController.login()");
        final UserDetails userDetails = userService.loadUserByUsername(logindto.getUsername());
        Users user = userService.getUsers(userDetails.getUsername());
        JwtResponse jwtResponse = tokenProvider.generateToken(userDetails);
        if (jwtResponse != null) {
            Cookie cookie = new Cookie("JWT_TOKEN", jwtResponse.getAccessToken());
            cookie.setPath("/");
            cookie.setMaxAge(3600);

            response.addCookie(cookie);
            return ResponseEntity.ok().body(jwtResponse);
        } else {
            return ResponseEntity.badRequest().body("Username or password is invalid!");

        }
//        else {
//            JwtResponse jwtResponse1 = tokenProvider.generateToken(userDetails);
//            if (jwtResponse != null) {
//                Cookie cookie = new Cookie("JWT_TOKEN", jwtResponse.getAccessToken());
//                cookie.setPath("/");
//                cookie.setMaxAge(3600);
//
//                response.addCookie(cookie);
//                return ResponseEntity.ok().body(jwtResponse);
//            } else {
//                return ResponseEntity.badRequest().body("Username or password is invalid!");
//            }
//        }
    }

    private void authenticate(String username, String password) throws Exception {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }

}

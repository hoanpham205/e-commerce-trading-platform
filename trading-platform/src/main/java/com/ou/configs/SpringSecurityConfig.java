/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.configs;

//import com.ou.configs.handlers.LoginSuccessHandler;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import com.ou.service.userService;
import java.text.SimpleDateFormat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 *
 * @author ADMIN
 */
@Configuration
@EnableWebSecurity
@EnableTransactionManagement
@ComponentScan(basePackages = {
    "com.ou.*"
})
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private userService userService;

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.logout().logoutSuccessUrl("/login");

        http
                .authorizeRequests()
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .defaultSuccessUrl("/")
                .failureUrl("/login?error")
                .permitAll()
                .successHandler((request, response, authentication) -> {
                    for (GrantedAuthority auth : authentication.getAuthorities()) {
                        if (auth.getAuthority().equals("ADMIN")) {
                            response.sendRedirect("/trading-platform/");
                        } else if (auth.getAuthority().equals("EMPLOYEE")) {
                            response.sendRedirect("/trading-platform/stat/");
                        }
                    }
                });

    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).
                passwordEncoder(passwordEncoder());
    }

    @Bean
    public Cloudinary cloudinary() {
        Cloudinary cloudinary = new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "ddznsqfbo",
                "api_key", "654246967571578",
                "api_secret", "Kpyhy80PQBnqlnI7EpI3kyxbXrs",
                "secure", true));
        return cloudinary;
    }

    @Bean
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver resolver
                = new CommonsMultipartResolver();

        resolver.setDefaultEncoding("UTF-8");
        return resolver;
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
        auth.setUserDetailsService(userService);
        auth.setPasswordEncoder(passwordEncoder());
        return auth;
    }

    @Bean
    public SimpleDateFormat simpleDateFormat() {
        return new SimpleDateFormat("yyyy-MM-dd");
    }
}

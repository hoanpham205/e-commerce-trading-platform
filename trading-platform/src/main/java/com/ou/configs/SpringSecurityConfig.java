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
import java.util.Properties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

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
@Order(2)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    protected void configure(HttpSecurity http)
            throws Exception {

        http.formLogin().loginPage("/login/")
                .usernameParameter("username")
                .passwordParameter("password");

        http.formLogin().defaultSuccessUrl("/");

        http.logout().logoutSuccessUrl("/login/");
        http.exceptionHandling()
                .accessDeniedPage("/login/?accessDenied");

        http.authorizeRequests()
                .antMatchers("/login/").permitAll()
                .antMatchers("/stat/").access("hasAnyAuthority('EMPLOYEE')")
                .antMatchers("/**").access("hasAnyAuthority('ADMIN')");
        http.csrf().disable();
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
    public SimpleDateFormat simpleDateFormat() {
        return new SimpleDateFormat("yyyy-MM-dd");
    }

    @Bean
    public JavaMailSender getMailSender() {
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();

        mailSender.setHost("smtp.gmail.com");
        mailSender.setPort(587);
        mailSender.setUsername("2051050488thuyen@ou.edu.vn");
        mailSender.setPassword("thuyen22052002##");
        mailSender.setDefaultEncoding("UTF-8");

        Properties javaMailProperties = new Properties();
        javaMailProperties.put("mail.smtp.starttls.enable", "true");
        javaMailProperties.put("mail.smtp.auth", "true");
        javaMailProperties.put("mail.transport.protocol", "smtp");
        javaMailProperties.put("mail.debug", "true");

        mailSender.setJavaMailProperties(javaMailProperties);
        return mailSender;
    }
}

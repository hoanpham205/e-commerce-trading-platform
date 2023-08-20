/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.configs.handlers;

import com.ou.pojo.Users;
import com.ou.service.userService;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

/**
 *
 * @author ADMIN
 */
@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private userService userDetailsService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest hsr,
            HttpServletResponse response, Authentication a)
            throws IOException, ServletException {
        Users  u=this.userDetailsService.getUsers(a.getName());
        hsr.getSession().setAttribute("currentUser", u);
        response.sendRedirect("/trading-platform/");
    }

}

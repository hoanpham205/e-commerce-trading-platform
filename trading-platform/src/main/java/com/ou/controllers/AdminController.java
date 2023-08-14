/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Users;
import com.ou.service.storeService;
import com.ou.service.userService;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ADMIN
 */
@Controller
@ControllerAdvice
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private userService userService;

    @Autowired
    private storeService storeService;

    @GetMapping("/")
    public String homeAdmin(Model model, @RequestParam(required = false) Map<String, String> params, HttpSession session) {
        model.addAttribute("user", session.getAttribute("currentUser"));

        String username = params.getOrDefault("username", null);
        model.addAttribute("user", userService.getUsers(username));

        return "admin";
    }

    @GetMapping("/store-manager")
    public String adminStoreManager(Model model, @RequestParam Map<String, String> params) {
        model.addAttribute("store", storeService.getStore(params));
        return "storeManager";
    }
    
     @GetMapping("/requestment")
    public String requestment(Model model) {
        model.addAttribute("request", userService.getUserActive());
        return "request";
    }

}

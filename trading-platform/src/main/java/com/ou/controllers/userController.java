/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Users;
import com.ou.service.userService;
import java.security.Principal;
import static java.util.Collections.list;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author ADMIN
 */
@Controller
@ControllerAdvice
public class userController {

    @Autowired
    private userService userService;

    @RequestMapping("/register/")
    public String resister(Model model) {
        model.addAttribute("user", new Users());
        return "register";
    }

    @PostMapping("/register/")
    public String resister1(Model model,
            @ModelAttribute(value = "user") Users user) {
        userService.addUser(user);
          return "redirect:/";
    }

    
    
    
    @RequestMapping("/login/")
    public String login(Model model) {
        model.addAttribute("user", new Users());
            return "login";
    }

 
}

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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ADMINasd
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
    public ResponseEntity<?> getAllUSer(Model model, @RequestParam(required = false) Map<String, String> params, HttpSession session) {

        String username = params.getOrDefault("username", null);

        return new ResponseEntity<>(userService.getUsers(username),HttpStatus.OK);
    }

    @GetMapping("/store-manager")
    public ResponseEntity<?> getAllStore( @RequestParam Map<String, String> params) {
        return new ResponseEntity<>( storeService.getStore(params),HttpStatus.OK);
    }
    
     @GetMapping("/requestment")
    public ResponseEntity<?> requestment(Model model) {
        model.addAttribute("request", userService.getUserActive());
        return new ResponseEntity<>( userService.getUserActive(),HttpStatus.OK);
    }

}

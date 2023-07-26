/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.service.storeService;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

/**
 *
 * @author ADMIN
 */
@Controller
public class storeController {

    @Autowired
    private storeService storeService;

    @GetMapping("/create_store")
    public String store(Model model) {
        model.addAttribute("store", new Store());
        return "create_store";
    }

    @PostMapping("/create_store")
    public String create_Store(Model model, @ModelAttribute("store") Store store) {
       
        storeService.addStore(store);
        return "create_store";
    }
    
    @GetMapping("/store")
    public String AdminStore(Model model) {
//        model.addAttribute("store", new Store());
        return "store";
    }
    

}

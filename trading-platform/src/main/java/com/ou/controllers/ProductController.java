/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.repository.userRepon;
import com.ou.service.ProductService;
import com.ou.service.storeService;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author ADMIN
 */
@Controller
@RequestMapping("/store")
@PropertySource("classpath:configs.properties")
public class ProductController {

    @Autowired
    private ProductService ProductService;
    
    @Autowired
    private storeService storeService;
    
    @Autowired
    private HttpSession s;

    @GetMapping("/create_product")
    public String ShowProduct(Model model) {
        model.addAttribute("product", new Products());
        return "create_product";
    }

    @PostMapping("/create_product")
    public String CreateProduct(Model model, @ModelAttribute(value = "product") Products p) {   
        Users u=(Users)s.getAttribute("currentUser");
        p.setStoreStoreId(this.storeService.getStoreByUserID(u));
        
      
        if (ProductService.addProduct(p)) {
            return "redirect:/";    
    }
        return "redirect:/store/create_product";
        }

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Products;
import com.ou.pojo.cart;
import com.ou.service.ProductService;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ADMIN
 */
@Controller
public class indexController {

    @Autowired
    private ProductService ProductService;

    @RequestMapping("/")
    public String index(Model model, @RequestParam Map<String, String> params, HttpSession session) {
        model.addAttribute("currentUser", session.getAttribute("currentUser"));
        model.addAttribute("products", ProductService.getProduct(null, null));
        System.out.println(ProductService.getProduct(null, null));
        return "index";
    }

    @GetMapping("/products/{productId}")
    public String productDetails(Model model, @PathVariable(value = "productId") int id) {
        model.addAttribute("product", this.ProductService.getProductById(id));
        return "details";
    }

    @GetMapping("/cart")
    public String cart(Model model, HttpSession session) {
        Map<Integer, cart> cart = (Map<Integer, cart>) session.getAttribute("cart");
        if (cart != null) {
            model.addAttribute("cart", cart.values());
        } else {
            model.addAttribute("cart", null);
        }

        return "cart";
    }
    
  
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.github.mustachejava.Binding;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.repository.userRepon;
import com.ou.service.ProductService;
import com.ou.service.storeService;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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

    @GetMapping("/product")
    public String showProduct(Model model) {
        model.addAttribute("product", new Products());
        return "create_product";
    }



    @GetMapping("/product/{id}")
    public String update(Model model, @PathVariable(value = "id") int id) {
        model.addAttribute("product", this.ProductService.getProductById(id));

        return "create_product";
    }

    @PostMapping("/product")
    public String update(@ModelAttribute(value = "product") @Valid Products p, BindingResult rs) {
        Users u = (Users) s.getAttribute("currentUser");
        p.setStoreStoreId(this.storeService.getStoreByUserID(u));
        if (!rs.hasErrors()) {
            if (ProductService.updateOraddProduct(p) == true) {
                return "redirect:/store/";
            }
        }
        return "create_product";
    }

}

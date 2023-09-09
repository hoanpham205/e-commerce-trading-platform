/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.service.CategoriService;
import com.ou.service.ProductService;
import com.ou.service.storeService;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ADMIN
 */
@Controller
@ControllerAdvice
public class storeController {

    @Autowired
    private storeService storeService;

    @Autowired
    private ProductService ProductService;

    @Autowired
    private CategoriService CategoriService;

    @Autowired
    private HttpSession s;

    @Autowired
    private Environment env;

    @ModelAttribute
    public void model(Model model) {
        model.addAttribute("cate", this.CategoriService.getCates());

    }

    @GetMapping("/create_store")
    public String store(Model model) {
        model.addAttribute("store", new Store());

        return "create_store";
    }

//    @PostMapping("/create_store")
//    public String create_Store(Model model, @ModelAttribute("store") Store store) {
//
//        storeService.addStore(store);
//        return "redirect:/";
//    }

    @GetMapping("/store/")
    public String adminStore(Model model, @RequestParam Map<String, String> params) {

        //ok
        model.addAttribute("store", this.storeService.getStoreByUserID((Users) s.getAttribute("currentUser")));
        //ok
        model.addAttribute("product", this.ProductService.getProduct(this.storeService.getStoreByUserID((Users) s.getAttribute("currentUser"))));

        int countSize = Integer.parseInt(this.env.getProperty("PAGE_SIZE"));
        int count = this.ProductService.countProduct(this.storeService.getStoreByUserID((Users) s.getAttribute("currentUser")));
        model.addAttribute("counter", Math.ceil(count * 1.0 / countSize));

        return "store";
    }

}

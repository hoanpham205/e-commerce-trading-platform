/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.service.ProductService;
import com.ou.service.storeService;
import com.ou.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ADMIN
 */
@RestController
public class ApiCountController {

    @Autowired
    private Environment env;

   
    @Autowired
    private storeService storeService;
    
    @Autowired
    private userService userService;

    @Autowired
    private ProductService ProductService;
    //lấy số lượng cần phân trang
    @GetMapping("/count/")
    public ResponseEntity<Double> count() {
        int countSize = Integer.parseInt(this.env.getProperty("PAGE_SIZE"));
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        Users currentUser = userService.getUsers(userDetails.getUsername());
        Store store = storeService.getStoreByUserID(currentUser);
        int count = this.ProductService.countProduct(store);
        return new ResponseEntity<>(  Math.ceil(count * 1.0 / countSize), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

    }
}

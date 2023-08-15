/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.service.storeService;
import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ADMIN
 */
@RestController
@RequestMapping("/api")
public class ApiStoreController {

    @Autowired
    private storeService storeService;

    @GetMapping("/stores/")
    public ResponseEntity<Store> getStore(HttpSession session) {
        
        return new ResponseEntity<>(this.storeService.getStoreByUserID((Users) session.getAttribute("currentUser")), HttpStatus.OK);
    }
}

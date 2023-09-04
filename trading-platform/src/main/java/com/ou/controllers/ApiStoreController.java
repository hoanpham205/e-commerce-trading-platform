/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.service.storeService;
import com.ou.service.userService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @Autowired
    private userService userService;

    //lấy store của curren user
    @GetMapping("/store/")
    @CrossOrigin
    public ResponseEntity<?> getStore() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users currentUser = userService.getUsers(userDetails.getUsername());
            Store store = this.storeService.getStoreByUserID(currentUser);
            return new ResponseEntity<>(store == null ? new ResponseEntity<>("You do not have permission to update this comment", HttpStatus.UNAUTHORIZED) : store, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    //tạo thêm store
    @PostMapping("/store/")
    @CrossOrigin
    public ResponseEntity<?> creareStore(@RequestBody @Valid Store s) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users currentUser = userService.getUsers(userDetails.getUsername());
            Store store = storeService.addStore(s, currentUser);
            return new ResponseEntity<>(store == null ? new ResponseEntity<>("You do not have permission to update this comment", HttpStatus.UNAUTHORIZED) : store, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}

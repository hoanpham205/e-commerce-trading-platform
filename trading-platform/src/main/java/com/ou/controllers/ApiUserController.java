/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.service.storeService;
import com.ou.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ADMIN
 */
@RestController
@RequestMapping("/api")
public class ApiUserController {

    @Autowired
    private userService userService;

    @Autowired
    private storeService storeService;

    @DeleteMapping("/user/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") int id) {
        if (storeService.getStoreByUserID(userService.getUserById(id)) != null) {
            this.userService.deleteAcount(id);
        } else {
            storeService.deleteProductByUserId(userService.getUserById(id));
            this.userService.deleteAcount(id);

        }
    }

    @PostMapping("/requestment/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void requestment(@PathVariable(value = "id") int id) {
        storeService.updateStore(storeService.getStoreByUserID(userService.getUserById(id)));
        userService.updateRoleUser(userService.getUserById(id));
    }

    @PostMapping("/register/")
    @CrossOrigin
    public ResponseEntity<Users> register(@RequestBody Users user) {
        return new ResponseEntity<>(this.userService.addUser(user), HttpStatus.OK);
    }

    @PostMapping("/login/")
    @CrossOrigin
    public ResponseEntity<Users> login(@RequestBody Users user) {

        String username = user.getUsername();
        String password = user.getPassword();

        Users u = userService.getUsers(username);

        if (u == null || !password.equals(u.getPassword())) {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);

        }

        return new ResponseEntity<>(u, HttpStatus.OK);
    }

}

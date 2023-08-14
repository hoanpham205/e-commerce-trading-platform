/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.service.storeService;
import com.ou.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
       userService.updateRoleUser(userService.getUserById(id));
        System.out.println( storeService.updateActive(storeService.getStoreByUserID(userService.getUserById(id))));
       storeService.updateActive(storeService.getStoreByUserID(userService.getUserById(id)));
    }

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Categories;
import com.ou.service.CategoriService;
import java.util.List;
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
public class ApiCateControllers {
    
    
    @Autowired
    private CategoriService CategoriService;
    
    @GetMapping("/categories/")
    public ResponseEntity<List<Categories>> getCate(){
        return new ResponseEntity<>(this.CategoriService.getCates(),HttpStatus.OK);
    }
}
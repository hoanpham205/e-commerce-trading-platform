/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Categories;
import com.ou.service.CategoriService;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
public class ApiCateControllers {

    @Autowired
    private CategoriService CategoriService;

    //lấy all cate
    @GetMapping("/categories/")
    public ResponseEntity<List<Categories>> getCate() {
        return new ResponseEntity<>(this.CategoriService.getCates(), HttpStatus.OK);
    }

    //lấy cate bawfnd id
    @GetMapping("/categories/{id}")
    public ResponseEntity<Categories> getCate(@PathVariable(value = "id") int id) {
        return new ResponseEntity<>(this.CategoriService.getCateById(id), HttpStatus.OK);
    }

    //
    @PostMapping("/categories/{id}/")
    public ResponseEntity<?> addCate(@RequestBody @Valid Categories cate,@PathVariable(value = "id") int id) {
        
        
        return new ResponseEntity<>(this.CategoriService.getCateById(id), HttpStatus.OK);
    }

}

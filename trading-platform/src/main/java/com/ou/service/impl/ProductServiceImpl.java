/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.pojo.Products;
import com.ou.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class ProductServiceImpl implements ProductService{
    
    @Autowired
    private ProductService ProductService;

    @Override
    public boolean addProduct(Products p) {
        return ProductService.addProduct(p);
    }
    
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.pojo.Products;
import com.ou.repository.ProductRepon;
import com.ou.service.ProductService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class ProductServiceImpl implements ProductService{
    
    @Autowired
    private ProductRepon ProductRepon;
    

    @Override
    public boolean addProduct(Products p) {
        return ProductRepon.addProduct(p);
    }

   

    @Override
    public List<Products> getProduct(Map<String, String> params) {
        return ProductRepon.getProduct(params);
    }

    @Override
    public int countProduct() {
        return ProductRepon.countProduct();
    }
    
}

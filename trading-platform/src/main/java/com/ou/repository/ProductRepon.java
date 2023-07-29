/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Products;
import java.util.List;
import java.util.Map;

/**
 *
 * @author ADMIN
 */
public interface ProductRepon {
    boolean addProduct(Products p);
    List<Products> getProduct(Map<String, String> params);
     int countProduct();
}

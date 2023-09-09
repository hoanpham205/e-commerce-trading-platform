/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.dto.ProductDto;
import com.ou.dto.Stats;
import com.ou.pojo.Categories;
import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author ADMIN
 */
public interface ProductService {

    ProductDto addProduct(@RequestParam Map<String, String> params, Store s, MultipartFile file);

    boolean updateProduct(Products p, int id);

    public List<Products> getProduct(Store s);

    int countProduct(Store s);

    boolean deleteProduct(int id);

    Products getProductById(int id);

    boolean updateOraddProduct(Products p);

    List<Products> sortProductname(String Dir);

    List<Products> sortProductPrice(String Dir);

    List<Object[]> stats(Map<String, String> params);


    }

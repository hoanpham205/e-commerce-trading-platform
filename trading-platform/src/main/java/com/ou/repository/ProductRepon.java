/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Categories;
import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import java.util.List;
import java.util.Map;

/**
 *
 * @author ADMIN
 */
public interface ProductRepon {

    Products addProduct(Products p);

    List<Products> getProduct(Store s, Map<String, String> params);

    int countProduct(Store s);

    int countAllProduct();

    boolean deleteProduct(int id);

    Products getProductById(int id);

    boolean updateOraddProduct(Products p);

    List<Products> sortProductname(String Dir);

    List<Products> sortProductPrice(String Dir);

    List<Object[]> statsEmp(Map<String, String> params);

}

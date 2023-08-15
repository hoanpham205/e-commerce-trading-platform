/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.repository.ProductRepon;
import com.ou.service.ProductService;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepon ProductRepon;

    @Autowired
    private Cloudinary Cloudinary;

    @Override
    public boolean addProduct(Products p) {

//        try {
//
//            Map res = this.Cloudinary.uploader().upload(p.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
//            p.setImageUrl(res.get("secure_url").toString());
//
//        } catch (IOException ex) {
//            Logger.getLogger(userServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
//        }
        return ProductRepon.addProduct(p);

    }

    @Override
    public List<Products> getProduct(Store s, Map<String, String> params) {
        return ProductRepon.getProduct(s, params);
    }

    @Override
    public int countProduct(Store s) {
        return ProductRepon.countProduct(s);
    }

    @Override
    public boolean deleteProduct(int id) {
        return this.ProductRepon.deleteProduct(id);

    }

    @Override
    public Products getProductById(int id) {
        return this.ProductRepon.getProductById(id);

    }

    @Override
    public boolean updateOraddProduct(Products p) {
        try {

            Map res = this.Cloudinary.uploader().upload(p.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
            p.setImageUrl(res.get("secure_url").toString());

        } catch (IOException ex) {
            Logger.getLogger(userServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return this.ProductRepon.updateOraddProduct(p);
    }

}

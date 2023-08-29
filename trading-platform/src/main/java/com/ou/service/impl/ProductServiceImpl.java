/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.ou.dto.ProductDto;
import com.ou.dto.Stats;
import com.ou.pojo.Categories;
import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.repository.ProductRepon;
import com.ou.service.CategoriService;
import com.ou.service.ProductService;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

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

    @Autowired
    private CategoriService CategoriService;

    @Override
    public ProductDto addProduct(@RequestParam Map<String, String> params, Store s, MultipartFile file) {
        Products products = new Products();

        try {

            products.setProductName(params.get("productName"));
            BigDecimal price = new BigDecimal(params.get("price"));
            System.out.println(price);
            products.setPrice(price);
            Map res = this.Cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap("resource_type", "auto"));
            products.setImageUrl(res.get("secure_url").toString());
            products.setCategoriesCategoryId(CategoriService.getCateByName(params.get("categories")));
            products.setStoreStoreId(s);

        } catch (IOException ex) {
            Logger.getLogger(userServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        this.ProductRepon.addProduct(products);

        Products productPart = this.ProductRepon.getProductById(products.getProductId());
        ProductDto productDto = ProductDto.builder()
                .id(productPart.getProductId())
                .productName(productPart.getProductName())
                .price(productPart.getPrice())
                .imageUrl(productPart.getImageUrl())
                .categories(productPart.getCategoriesCategoryId().getCategoryName())
                .build();

        return productDto;

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
//        try {
//
//            Map res = this.Cloudinary.uploader().upload(p.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
//            p.setImageUrl(res.get("secure_url").toString());
//
//        } catch (IOException ex) {
//            Logger.getLogger(userServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
//        }
        return this.ProductRepon.updateOraddProduct(p);
    }

    @Override
    public boolean updateProduct(Products p, int id) {
        Products product = ProductRepon.getProductById(id);

        if (p != null) {
            if (product == null) {
                throw new ResourceNotFoundException("ko tim thay product");

            }

            product.setCategoriesCategoryId(p.getCategoriesCategoryId());
            product.setImageUrl(p.getImageUrl());
            product.setProductName(p.getProductName());
            product.setPrice(p.getPrice());
            return ProductRepon.updateOraddProduct(product);
        } else {
            return false;
        }

    }

    @Override
    public List<Products> sortProductname(String Dir) {
        String direction = Dir != null ? Dir.toLowerCase() : "asc";
        List<Products> prodcutList = ProductRepon.sortProductname(direction);
        return prodcutList;
    }

    @Override
    public List<Products> sortProductPrice(String Dir) {
        String direction = Dir != null ? Dir.toLowerCase() : "asc";
        List<Products> prodcutList = ProductRepon.sortProductPrice(direction);
        return prodcutList;
    }

  

}

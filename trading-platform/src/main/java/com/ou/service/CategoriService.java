/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.pojo.Categories;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
public interface CategoriService {

    List<Categories> getCates();

    Categories getCateById(int id);
    
    
    boolean addCate(Categories cate);

}

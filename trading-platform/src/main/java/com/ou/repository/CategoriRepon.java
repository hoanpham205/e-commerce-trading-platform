/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Categories;
import java.util.List;

/**
 *
 * @author ADMIN
 */
public interface CategoriRepon {

    List<Categories> getcate();

    Categories getCateById(int id);

    boolean addOrUpdate(Categories cate);

    Categories getCateByName(String name);

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.pojo.Categories;
import com.ou.repository.CategoriRepon;
import com.ou.service.CategoriService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class CategoriServiceImpl implements CategoriService {
    
    @Autowired
    private CategoriRepon CategoriRepon;

    @Override
    public List<Categories> getCates() {
        return CategoriRepon.getcate();
    }

}

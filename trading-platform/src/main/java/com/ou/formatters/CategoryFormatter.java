/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.formatters;

import com.ou.pojo.Categories;
import java.text.ParseException;
import java.util.Locale;
import org.springframework.format.Formatter;

/**
 *
 * @author ADMIN
 */
public class CategoryFormatter implements Formatter<Categories>{

    @Override
    public String print(Categories t, Locale locale) {
        return String.valueOf(t.getCategoryId());
    }

    @Override
    public Categories parse(String cateId, Locale locale) throws ParseException {
        return new Categories(Integer.parseInt(cateId));
    }
    
}

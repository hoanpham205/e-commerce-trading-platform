/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.formatters;

import com.ou.pojo.Store;
import java.text.ParseException;
import java.util.Locale;
import org.springframework.format.Formatter;

/**
 *
 * @author ADMIN
 */
public class StoreFormatter implements Formatter<Store>{

    @Override
    public String print(Store store, Locale locale) {
        return String.valueOf(store.getStoreId());
    }

    @Override
    public Store parse(String string, Locale locale) throws ParseException {
        Store store =new Store();
        store.setStoreId(Integer.parseInt(string));
        return store;
    }
    
}

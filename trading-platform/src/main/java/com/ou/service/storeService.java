/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import java.util.List;
import java.util.Map;

/**
 *
 * @author ADMIN
 */
public interface storeService {

    Store addStore(Store store);

    List<Store> getStore(Map<String, String> params);

    public Store getStoreByUserID(Users id);

    boolean deleteProductByUserId(Users id);
    
    boolean updateActive(Store s);
}

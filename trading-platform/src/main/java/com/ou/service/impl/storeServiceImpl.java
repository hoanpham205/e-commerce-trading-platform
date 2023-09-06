/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.repository.storeRepon;
import com.ou.repository.userRepon;
import com.ou.service.storeService;
import com.ou.service.userService;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class storeServiceImpl implements storeService {

    @Autowired
    private storeRepon storeRepon;

    @Autowired
    private userService userService;


    @Override
    public Store addStore(Store store, Users userId) {

        userId.setActive(Boolean.TRUE);
        userService.addUser(userId);
        store.setUserId(userId);
        store.setActive(Boolean.FALSE);
        return storeRepon.addStore(store);
    }

    @Override
    public Store getStoreByUserID(Users id) {
        return storeRepon.getStoreByUserID(id);
    }

    @Override
    public List<Store> getStore(Map<String, String> params) {
        return storeRepon.getStore(params);
    }

    @Override
    public boolean deleteProductByUserId(Users id) {
        return storeRepon.deleteStoreByUserId(id);
    }

    @Override
    public boolean updateStore(Store store) {
        try {

            store.setActive(Boolean.TRUE);

            return storeRepon.updateStore(store);
        } catch (Exception e) {
        }

        return false;
    }

    @Override
    public List<Object[]> statsAdmin(Map<String, String> params,Store s) {
        return storeRepon.statsAdmin(params,s);
    }

    @Override
    public Store getStoreByID(int id) {
        return storeRepon.getStoreByID(id);
    }
}

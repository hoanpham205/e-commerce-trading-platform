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

    @Autowired
    private HttpSession session;

    @Override
    public Store addStore(Store store) {
        Users u = (Users) session.getAttribute("currentUser");
        u.setActive(Boolean.TRUE);
        userService.addUser(u);
        store.setUserId(u);
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
        return storeRepon.deleteProductByUserId(id);
    }

    @Override
    public boolean updateActive(Store s) {
        try {

            s.setActive(Boolean.TRUE);
            storeRepon.addStore(s);
            return true;
        } catch (Exception e) {
        }

        return false;

    }

}

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
    private HttpSession session;

    @Override
    public Store addStore(Store store) {
        
        store.setUserId((Users)session.getAttribute("currentUser"));
        return storeRepon.addStore(store);
    }

    @Override
    public Store getStoreByUserID(Users id) {
        return storeRepon.getStoreByUserID(id);
    }

    

}

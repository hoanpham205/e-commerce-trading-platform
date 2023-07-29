/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Store;
import com.ou.pojo.Users;

/**
 *
 * @author ADMIN
 */
public interface storeRepon {
    Store addStore(Store store);
    Store getStoreByUserID(Users id);
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import java.util.List;
import java.util.Map;

/**
 *
 * @author ADMIN
 */
public interface storeRepon {

    Store addStore(Store store);

    Store getStoreByUserID(Users id);

    List<Store> getStore(Map<String, String> params);

    boolean deleteProductByUserId(Users id);

    boolean updateStore(Store store);

}

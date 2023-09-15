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
public interface userRepon {

    Users addUser(Users user);

    Users getUser(int id);

    Users getUserByUsername(String username);

    Users getUsers(String username);

    Store getStoreByUserId(int userId);

    Users getUserById(int id);

    boolean deleteAcount(int id);

    List<Users> getUserActive();

    List<Users> getAllUser();

    List<Users> findUser(Map<String, String> params);
    
    

}

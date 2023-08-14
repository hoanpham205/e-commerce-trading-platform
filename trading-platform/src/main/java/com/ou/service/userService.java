/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.security.core.userdetails.UserDetailsService;

/**
 *
 * @author ADMIN
 */
public interface userService extends UserDetailsService {

    Users addUser(Users user);

    List<Users> getUsers(String username);

    Store getStoreByUserId(int userId);

    Users getUserById(int id);

    boolean deleteAcount(int id);
    List<Users> getUserActive();
    
    boolean updateRoleUser(Users u);
}

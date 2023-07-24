/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.pojo.Users;
import org.springframework.stereotype.Service;
import java.util.List;
import org.springframework.security.core.userdetails.UserDetailsService;



/**
 *
 * @author ADMIN
 */
public interface userService extends UserDetailsService{
    
    Users addUser(Users user);
    Users getUser(int id);
    
    
    List<Users> getUsers(String username);

}
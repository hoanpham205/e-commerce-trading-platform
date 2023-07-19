/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Users;
import java.util.List;

/**
 *
 * @author ADMIN
 */
public interface userRepon {

    Users addUser(Users user);

    Users getUser(int id);

            
    List<Users> getUsers(String username);

}

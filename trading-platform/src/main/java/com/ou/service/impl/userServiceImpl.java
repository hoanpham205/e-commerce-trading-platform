/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.ou.service.*;
import com.ou.pojo.Users;
import com.ou.repository.userRepon;
import java.io.File;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service("userDetailsService")
public class userServiceImpl implements userService {

    @Autowired
    private userRepon userRepon;

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    public BCryptPasswordEncoder passwordEncoder;

    @Override
    public Users addUser(Users user) {
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        user.setRole("USER");
        try {

            Map res = this.cloudinary.uploader().upload(user.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
            user.setAvatar(res.get("secure_url").toString());

        } catch (IOException ex) {
            Logger.getLogger(userServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return userRepon.addUser(user);
    }

    @Override
    public Users getUser(int id) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

    @Override
    public List<Users> getUsers(String username
    ) {
        return userRepon.getUsers(username);
    }

    @Override
    public UserDetails loadUserByUsername(String string) throws UsernameNotFoundException {

        List<Users> users = userRepon.getUsers(string);

        if (users.isEmpty()) {
            throw new UsernameNotFoundException("Không tồn tại!");
        }

        Users u = userRepon.getUser((users.get(0)).getUserId());

        Set<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(u.getRole()));
        return new org.springframework.security.core.userdetails.User(
                u.getUsername(), u.getPassword(), authorities);
    }
}
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.ou.dto.UserDto;
import com.ou.pojo.Store;
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
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author ADMIN
 */
@Service("userDetailsService")
public class userServiceImpl implements userService {

    @Autowired
    private MailSender mailSender;

    @Autowired
    private userRepon userRepon;

    @Autowired
    private storeService storeService;

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    public BCryptPasswordEncoder passwordEncoder;

    @Override
    public Users addUser(Users user) {

        if (user == null) {
            user.setPassword(this.passwordEncoder.encode(user.getPassword()));
            user.setRole("USER");
            user.setActive(Boolean.FALSE);
        }

        return userRepon.addUser(user);
    }

    @Override
    public Users getUsers(String username) {
        return userRepon.getUsers(username);
    }

    @Override
    public UserDetails loadUserByUsername(String string) throws UsernameNotFoundException {

        Users users = userRepon.getUsers(string);

        if (users == null) {
            throw new UsernameNotFoundException("Không tồn tại!");
        }

        Users u = userRepon.getUser(users.getUserId());

        Set<GrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority(u.getRole()));
        return new org.springframework.security.core.userdetails.User(
                u.getUsername(), u.getPassword(), authorities);
    }

    @Override
    public Store getStoreByUserId(int userId) {
        return userRepon.getStoreByUserId(userId);
    }

    @Override
    public Users getUserById(int id) {
        return userRepon.getUserById(id);
    }

    @Override
    public boolean deleteAcount(int id) {
        return userRepon.deleteAcount(id);
    }

    @Override
    public List<Users> getUserActive() {
        return userRepon.getUserActive();
    }

    @Override
    public boolean updateRoleUser(Users u) {
        try {
            u.setActive(Boolean.FALSE);
            u.setRole("EMPLOYEE");
//            sendMail("2051050435tan@ou.edu.vn", "Ban Da Dang Ki Cua Hang", "cam on ban");

            userRepon.addUser(u);
            return true;
        } catch (Exception e) {
        }

        return false;
    }

    @Override
    public Users addUsers(Map<String, String> params, MultipartFile file) {
        Users u = new Users();
        u.setUsername(params.get("username"));
        u.setPassword(this.passwordEncoder.encode(params.get("password")));
        u.setFullname(params.get("fullname"));

        u.setPhone(params.get("phone"));
        u.setEmail(params.get("phone"));
        u.setEmail(params.get("email"));
        u.setActive(Boolean.FALSE);
        u.setRole("USER");
        try {
            Map res = this.cloudinary.uploader().upload(file.getBytes(), ObjectUtils.asMap("resource_type", "auto"));
            u.setAvatar(res.get("secure_url").toString());

        } catch (IOException ex) {
            Logger.getLogger(userServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return userRepon.addUser(u);
    }

    @Override
    public UserDto getUserByUsername(String username) {
        Users user = userRepon.getUsers(username);
        UserDto userdto = UserDto.builder()
                .id(user.getUserId())
                .userNaeme(user.getUsername())
                .email(user.getEmail())
                .avatar(user.getAvatar())
                .role(user.getRole()).build();
        return userdto;
    }

    @Override
    public List<Users> getAllUser() {
        return this.userRepon.getAllUser();
    }

    @Override
    public List<Users> findUser(Map<String, String> params) {
        return this.userRepon.findUser(params);
    }

    public void sendMail(String to, String subject, String content) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setSubject(subject);
        mailMessage.setText(content);

        mailSender.send(mailMessage);
    }

    @Override
    public Users updateOrAdd(Users u) {
        try {
            Map res = this.cloudinary.uploader().upload(u.getFile().getBytes(), ObjectUtils.asMap("resource_type", "auto"));
            u.setAvatar(res.get("secure_url").toString());

        } catch (IOException ex) {
            Logger.getLogger(userServiceImpl.class.getName()).log(Level.SEVERE, null, ex);
        }
        return this.userRepon.addUser(u);
    }

}

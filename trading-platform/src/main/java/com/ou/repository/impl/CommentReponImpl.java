/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Comments;
import com.ou.repository.CommentRepon;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

/**
 *
 * @author ADMIN
 */
public class CommentReponImpl implements CommentRepon {

    @Autowired
    private LocalSessionFactoryBean sessionFactory;

    @Override
    public boolean addComment(Comments c) {

        Session session = this.sessionFactory.getObject().getCurrentSession();
        Comments f = new Comments();
        try {
            
            session.save(f);

            return true;
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return false;
    }

}

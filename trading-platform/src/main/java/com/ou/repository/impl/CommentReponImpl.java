/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.repository.CommentRepon;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author ADMIN
 */
@Repository
@Transactional
public class CommentReponImpl implements CommentRepon {

    @Autowired
    private LocalSessionFactoryBean sessionFactory;

    @Override
    public Comments addComment(Comments c) {

        Session session = this.sessionFactory.getObject().getCurrentSession();
        try {

            session.save(c);

            return c;
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return null;
    }

    @Override
    public Comments findCommentById(int id) {
         Session s = this.sessionFactory.getObject().getCurrentSession();
        return s.get(Comments.class, id);
    }

    @Override
    public List<Comments> findAllCommentsByProductId(Products id) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("SELECT c FROM Comments c WHERE c.productId=:id");
        q.setParameter("id", id);
        return q.getResultList();
    }

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.repository.CommentRepon;
import java.util.Date;
import java.util.List;
import org.hibernate.HibernateException;
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
            c.setCommentDate(new Date());
            session.save(c);

            return c;
        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return null;
    }

    @Override
    public Comments findCommentById(int id) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        Query query = session.createQuery("SELECT c FROM Comments c WHERE c.commentId = :commentId");
        query.setParameter("commentId", id);
        return (Comments) query.uniqueResult();
    }

    @Override
    public List<Comments> findAllCommentsByProductId(Products id) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("SELECT c FROM Comments c WHERE c.productId=:id");
        q.setParameter("id", id);
        return q.getResultList();
    }

    @Override
    public boolean deleteComment(Comments c) {
        Session session = this.sessionFactory.getObject().getCurrentSession();

        try {
            session.delete(c);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public Comments getCommentByUserId(int id) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("SELECT c FROM Comments c WHERE c.userId=:id");
        q.setParameter("id", id);
        return (Comments) q.getResultList();
    }

    @Override
    public Comments getComment(Users user) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        Query query = session.createQuery("SELECT c FROM Comments c WHERE c.userId = :userId");
        query.setParameter("userId", user);
        return (Comments) query.getSingleResult();
    }

    @Override
    public List<Comments> getAllByCommentId(Comments c) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        Query query = session.createQuery("SELECT c FROM Comments c WHERE c.commentsCommentId = :commentsCommentId");
        query.setParameter("commentsCommentId", c);
        return query.getResultList();
    }

    @Override
    public Comments getAllByProductId(Products p) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        Query query = session.createQuery("SELECT c FROM Comments c WHERE c.commentsCommentId = :productId");
        query.setParameter("productId", p);
        return (Comments) query.getSingleResult();
    }

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.repository.userRepon;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import javax.servlet.http.HttpSession;
import org.apache.http.HttpStatus;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author ADMIN
 */
@Repository
@Transactional
public class userReponImpl implements userRepon {

    @Autowired
    private LocalSessionFactoryBean sessionFactory;

    @Override
    public Users addUser(Users user) {
        Session s = this.sessionFactory.getObject().getCurrentSession();

        try {
            if (user.getUserId() == null) {
                s.save(user);
            } else {
                s.update(user);
            }

            return user;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return null;
    }

    @Override
    public Users getUsers(String username) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("From Users Where username=:un");
        q.setParameter("un", username);

        return (Users) q.getSingleResult();
    }

    @Override
    public Users getUser(int id) {
        Session session = this.sessionFactory.getObject().getCurrentSession();

        return session.get(Users.class, id);
    }

    @Override
    public Store getStoreByUserId(int userId) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        return s.get(Store.class, userId);
    }

    @Override
    public Users getUserByUsername(String username) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("From Users Where username=:un");
        q.setParameter("un", username);

        return (Users) q.getSingleResult();
    }

    @Override
    public Users getUserById(int id) {
        Session s = this.sessionFactory.getObject().getCurrentSession();

        return s.get(Users.class, id);
    }

    @Override
    public boolean deleteAcount(int id) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        try {
            Users p = this.getUserById(id);
            session.delete(p);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public List<Users> getUserActive() {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("From Users Where active=:un");
        q.setParameter("un", true);

        return q.getResultList();
    }

    @Override
    public List<Users> getAllUser() {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("SELECT u FROM Users u WHERE u.role !=:un");
        q.setParameter("un", "ADMIN");

        return q.getResultList();
    }

    @Override
    public List<Users> findUser(Map<String, String> params) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q = s.createQuery("FROM Users");

        CriteriaBuilder b = s.getCriteriaBuilder();
        CriteriaQuery<Users> query = b.createQuery(Users.class);

        Root<Users> root = query.from(Users.class);

        if (params != null) {
            List<Predicate> predicates = new ArrayList<>();

            String username = params.get("username");
            if (username != null && !username.isEmpty()) {
                predicates.add(b.like(root.get("username"), String.format("%%%s%%", username)));
            }
            query.where(predicates.toArray(Predicate[]::new));
            query.multiselect(root);
            q = s.createQuery(query);

        }
        return q.getResultList();
    }

}

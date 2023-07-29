/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.repository.storeRepon;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
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
public class storeReponImpl implements storeRepon {

    @Autowired
    private LocalSessionFactoryBean sessionFactory;

    @Override
    public Store addStore(Store store) {

        Session s = this.sessionFactory.getObject().getCurrentSession();

        try {
            s.save(store);

            return store;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return null;
    }

    @Override
    public Store getStoreByUserID(Users id) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        Query q=s.createQuery("FROM Store WHERE userId=:un");
        q.setParameter("un", id);   
        return  (Store) q.getSingleResult();

    }

}

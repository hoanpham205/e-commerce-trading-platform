/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Store;
import com.ou.repository.storeRepon;
import org.hibernate.HibernateException;
import org.hibernate.Session;
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
public class storeReponImpl implements storeRepon{

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
    
}

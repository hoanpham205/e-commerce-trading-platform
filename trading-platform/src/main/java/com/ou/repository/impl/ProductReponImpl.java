/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Products;
import com.ou.repository.ProductRepon;
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
public class ProductReponImpl implements ProductRepon {
    
    @Autowired
    private LocalSessionFactoryBean sessionFactory;

    @Override
    public boolean addProduct(Products p) {
        Session session = this.sessionFactory.getObject().getCurrentSession();

        try {
            if (p.getProductId()== 0) {
                session.save(p);
            } else {
                session.update(p);
            }
            return true;
        } catch (HibernateException e) {
            System.err.println("==Có lỗi xảy ra! Cập nhật thao tác thất bại==" + e.getMessage());
            e.printStackTrace();
        }
        return false;
    }

}

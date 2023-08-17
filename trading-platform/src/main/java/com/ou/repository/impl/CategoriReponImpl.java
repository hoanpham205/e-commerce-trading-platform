/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Categories;
import com.ou.repository.CategoriRepon;
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
public class CategoriReponImpl implements CategoriRepon {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Override
    public List<Categories> getcate() {
        Session s = this.factory.getObject().getCurrentSession();
        Query q = s.createQuery("FROM Categories");

        return q.getResultList();
    }

}

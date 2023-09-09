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

    @Override
    public Categories getCateById(int id) {
        Session session = this.factory.getObject().getCurrentSession();
        return session.get(Categories.class, id);
    }

    @Override
    public boolean addOrUpdate(Categories cate) {
        Session session = this.factory.getObject().getCurrentSession();

        try {
            if (cate == null) {
                session.save(cate);

            }
            else{
                session.update(cate);
            }
            return true;
        } catch (Exception e) {
            return false;
        }

    }

    @Override
    public Categories getCateByName(String name) {
        Session session = this.factory.getObject().getCurrentSession();

        Query q = session.createQuery("SELECT c FROM Categories c WHERE c.categoryName = :categoryName");
        q.setParameter("categoryName", name);
        return (Categories) q.getSingleResult();

    }

}

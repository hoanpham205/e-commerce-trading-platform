/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.repository.ProductRepon;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
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

    @Autowired
    private Environment env;

    @Override
    public boolean addProduct(Products p) {
        Session session = this.sessionFactory.getObject().getCurrentSession();

        try {

            session.save(p);

            return true;
        } catch (HibernateException e) {
            System.err.println("Có lỗi xảy ra! Cập nhật thao tác thất bại==" + e.getMessage());
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public List<Products> getProduct(Store s, Map<String, String> params) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Products> query = b.createQuery(Products.class);
        Root<Products> root = query.from(Products.class);

//        query.where(b.equal(root.get("storeStoreId"), s));
        List<Predicate> predicates = new ArrayList<>();
        predicates.add(b.equal(root.get("storeStoreId"), s));

        if (params != null) {

            String kw = params.get("kw");
            if (kw != null && !kw.isEmpty()) {
                Predicate p = b.like(root.get("productName").as(String.class), String.format("%%%s%%", kw));
                predicates.add(p);
            }

            String fromPrice = params.get("fromPrice");
            if (fromPrice != null && !fromPrice.isEmpty()) {
                predicates.add(b.greaterThanOrEqualTo(root.get("price"), Double.parseDouble(fromPrice)));
            }

            String toPrice = params.get("toPrice");
            if (toPrice != null && !toPrice.isEmpty()) {
                predicates.add(b.lessThanOrEqualTo(root.get("price"), Double.parseDouble(toPrice)));
            }

            String cateId = params.get("cateId");
            if (cateId != null && !cateId.isEmpty()) {
                predicates.add(b.equal(root.get("categoriesCategoryId"), Integer.parseInt(cateId)));
            }
            query.where(predicates.toArray(Predicate[]::new));
        }
        query.orderBy(b.desc(root.get("productId")));
        query.select(root);

        Query q = session.createQuery(query);

        if (params != null) {
            String page = params.get("page");
            int pageSize = Integer.parseInt(this.env.getProperty("PAGE_SIZE"));
            if (page != null) {
                q.setFirstResult((Integer.parseInt(page) - 1) * pageSize);
                q.setMaxResults(pageSize);
            }
        }
        return q.getResultList();
    }

    @Override
    public int countProduct(Store s) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        Query q = session.createQuery("SELECT COUNT(*) From Products where storeStoreId=:s");
        q.setParameter("s", s);
        return Integer.parseInt(q.getSingleResult().toString());
    }

    @Override
    public Products getProductById(int id) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        return s.get(Products.class, id);
    }

    @Override
    public boolean deleteProduct(int id) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        try {
            Products p = this.getProductById(id);
            session.delete(p);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean updateOraddProduct(Products p) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        try {
            if (p.getProductId() == null) {
                s.save(p);
            } else {
                s.update(p);
            }

            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

}

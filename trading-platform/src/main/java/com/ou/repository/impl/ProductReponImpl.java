/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Orderdetails;
import com.ou.pojo.Orders;
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
    public Products addProduct(Products p) {
        Session session = this.sessionFactory.getObject().getCurrentSession();

        try {

            session.save(p);
            session.flush();

            return p;
        } catch (HibernateException e) {
            System.err.println("Có lỗi xảy ra! Cập nhật thao tác thất bại==" + e.getMessage());
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<Products> getProduct(Store s, Map<String, String> params) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> query = b.createQuery(Object[].class);
        CriteriaQuery<Store> queryStore = b.createQuery(Store.class);

        Root<Products> root = query.from(Products.class);
        Root<Store> rootStore = query.from(Store.class);

        if (params != null) {
            List<Predicate> predicates = new ArrayList<>();

            if (s != null) {
                predicates.add(b.equal(root.get("storeStoreId"), s));

            }

            String kw = params.get("kw");
            if (kw != null && !kw.isEmpty()) {
                predicates.add(b.like(root.get("productName").as(String.class), String.format("%%%s%%", kw)));
            }

            String fromPrice = params.get("fromPrice");
            if (fromPrice != null && !fromPrice.isEmpty()) {
                predicates.add(b.greaterThanOrEqualTo(root.get("price"), Double.parseDouble(fromPrice)));
            }

            String storeName = params.get("storeName");
            if (storeName != null && !storeName.isEmpty()) {
                predicates.add(b.equal(rootStore.get("storeId"), root.get("storeStoreId")));

                predicates.add(b.like(rootStore.get("storeName").as(String.class),
                        String.format("%%%s%%", storeName)));
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
        query.multiselect(root);

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
        Session session = this.sessionFactory.getObject().getCurrentSession();
        return session.get(Products.class, id);
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

    @Override
    public List<Products> sortProductname(String Dir) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        String queryString = "SELECT p FROM Products p ORDER BY ";
        if ("asc".equalsIgnoreCase(Dir)) {
            queryString += "p.productName ASC";
        } else if ("desc".equalsIgnoreCase(Dir)) {
            queryString += "p.productName DESC";
        } else {
            queryString += "p.productName DESC";
        }

        Query q = s.createQuery(queryString);

        List<Products> posts = q.getResultList();
        return posts;
    }

    @Override
    public List<Products> sortProductPrice(String Dir) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        String queryString = "SELECT p FROM Products p ORDER BY ";
        if ("asc".equalsIgnoreCase(Dir)) {
            queryString += "p.price ASC";
        } else if ("desc".equalsIgnoreCase(Dir)) {
            queryString += "p.price DESC";
        } else {
            queryString += "p.price DESC";
        }

        Query q = s.createQuery(queryString);

        List<Products> posts = q.getResultList();
        return posts;
    }

    @Override
    public List<Object[]> quarterStats(int quarter, int year) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder builder = s.getCriteriaBuilder();
        CriteriaQuery<Object[]> cr = builder.createQuery(Object[].class);

        Root rP = cr.from(Products.class);
        Root rOd = cr.from(Orderdetails.class);

        cr.where(builder.equal(rOd.get("productId"), rP.get("productsProductId")),
                builder.equal(builder.function("YEAR", Integer.class, rOd.get("paymentDate")), year));

        cr.multiselect(rP.get("productId"), rP.get("productName"), builder.count(rOd.get("productId")));
        cr.groupBy(rP.get("productId"));

        Query query = s.createQuery(cr);
        return query.getResultList();
    }

    @Override
    public List<Object[]> monthStats(int m, int y) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> cr = builder.createQuery(Object[].class);

        Root rP = cr.from(Products.class);
        Root rOd = cr.from(Orderdetails.class);

        cr.where(builder.equal(rP.get("productsProductId"), rOd.get("productId")),
                builder.equal(builder.function("MONTH", Integer.class, rOd.get("paymentDate")), m),
                builder.equal(builder.function("YEAR", Integer.class, rOd.get("paymentDate")), y));

        cr.multiselect(rP.get("productId"), rP.get("productName"), builder.count(rOd.get("productId")));
        cr.groupBy(rP.get("productId"));

        Query query = session.createQuery(cr);
        return query.getResultList();
    }

    @Override
    public List<Object[]> yearStats(int y) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> cr = builder.createQuery(Object[].class);

        Root rP = cr.from(Products.class);
        Root rOd = cr.from(Orderdetails.class);

        cr.where(builder.equal(rP.get("productsProductId"), rOd.get("productId")),
                builder.equal(builder.function("YEAR", Integer.class, rOd.get("paymentDate")), y),
                builder.equal(builder.function("YEAR", Integer.class, rOd.get("paymentDate")), y));
        
        cr.multiselect(rP.get("productId"), rP.get("productName"), builder.count(rOd.get("productId")));
        cr.groupBy(rP.get("productId"));
        Query query = session.createQuery(cr);
        return query.getResultList();
    }

}

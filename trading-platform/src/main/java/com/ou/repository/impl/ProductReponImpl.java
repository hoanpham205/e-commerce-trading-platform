/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.ou.dto.ProductDto;
import com.ou.pojo.Categories;
import com.ou.pojo.Orderdetails;
import com.ou.pojo.Orders;
import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.repository.ProductRepon;
import java.util.ArrayList;
import java.util.HashMap;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
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
    public List<Products> getProduct(Store s) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        Query q = session.createQuery(" From Products where storeStoreId=:s");
        q.setParameter("s", s);
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

    //THỐNG KÊ
    @Override
    public List<Object[]> statsEmp(Map<String, String> params) {
        Session s = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder builder = s.getCriteriaBuilder();
        CriteriaQuery<Object[]> cr = builder.createQuery(Object[].class);

        Root rP = cr.from(Products.class);
        Root rOd = cr.from(Orderdetails.class);
        Root rOr = cr.from(Orders.class);

        String quarter = params.get("quarter");
        String year = params.get("year");
        String month = params.get("month");

        if (params != null && year != null) {
            List<Predicate> predicates = new ArrayList<>();

//            cr.where(builder.equal(rOd.get("productsProductId"), rP.get("productId")),
//                    builder.equal(rOd.get("ordersOrderId"), rOr.get("orderId")));
            predicates.add(builder.equal(rOd.get("productsProductId"), rP.get("productId")));
            predicates.add(builder.equal(rOd.get("ordersOrderId"), rOr.get("orderId")));

            predicates.add(builder.equal(builder.function("year", Integer.class, rOr.get("orderDate")),
                    Integer.parseInt(year)));

            if (quarter != null && !quarter.isEmpty()) {
                predicates.add(builder.equal(builder.function("quarter", Integer.class, rOr.get("orderDate")),
                        Integer.parseInt(quarter)));
            }

            if (month != null && !month.isEmpty()) {
                predicates.add(builder.equal(builder.function("month", Integer.class, rOr.get("orderDate")),
                        Integer.parseInt(month)));
            }
            String cateId = params.get("cateId");
            if (cateId != null && !cateId.isEmpty()) {
                Root rCate = cr.from(Categories.class);
                predicates.add(builder.equal(rP.get("categoriesCategoryId"), rCate.get("categoryId")));
                predicates.add(builder.equal(rP.get("categoriesCategoryId"), Integer.parseInt(cateId)));
                System.out.println(cateId);
            }
            cr.where(predicates.toArray(Predicate[]::new));
            cr.multiselect(rOd);
//
//            cr.multiselect(rP.get("productId"),
//                    rP.get("productName"),
//                    rOd.get("total"));
            Query query = s.createQuery(cr);
//            List<Object[]> list = query.getResultList();
//            Gson gson = new Gson();
//            List<Map<String, Object>> jsonResults = new ArrayList<>();
//
//            for (Object[] result : list) {
//                Map<String, Object> jsonResult = new HashMap<>();
//                jsonResult.put("productId", result[0]);
//                jsonResult.put("productName", result[1]);
//                jsonResult.put("total", result[2]);
//                jsonResults.add(jsonResult);
//            }

            return query.getResultList();

        }
        return null;
    }

}

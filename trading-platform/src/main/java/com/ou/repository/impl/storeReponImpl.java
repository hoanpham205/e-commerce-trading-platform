/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.dto.ProductDto;
import com.ou.pojo.Orderdetails;
import com.ou.pojo.Orders;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.repository.storeRepon;
import com.ou.service.userService;
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
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder b = session.getCriteriaBuilder();
        CriteriaQuery<Store> query = b.createQuery(Store.class);
        Root<Store> root = query.from(Store.class);

        List<Predicate> predicates = new ArrayList<>();

        Predicate p = b.equal(root.get("userId"), id);
        predicates.add(p);

        query.where(predicates.toArray(Predicate[]::new));

//        query.orderBy(b.desc(root.get("productId")));
        query.select(root);

        Query q = session.createQuery(query);

        return (Store) q.getSingleResult();

    }

    @Override
    public List<Store> getStore(Map<String, String> params) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<Store> query = builder.createQuery(Store.class);
        Root<Store> root = query.from(Store.class);
        query.select(root);

        if (params != null) {
            List<Predicate> predicates = new ArrayList<>();

            String storeName = params.get("storeName");
            if (storeName != null && !storeName.isEmpty()) {
                Predicate p = builder.like(root.get("storeName").as(String.class), String.format("%%%s%%", storeName));
                predicates.add(p);
            }

//            predicates.add(builder.equal(root.get("active"), 1));
            query.where(predicates.toArray(Predicate[]::new));

        }
        Query q = session.createQuery(query);
        return q.getResultList();
    }

    @Override
    public boolean deleteStoreByUserId(Users id) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        try {
            Store s = this.getStoreByUserID(id);
            session.delete(s);
            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }

    }

    @Override
    public boolean updateStore(Store store) {
        Session s = this.sessionFactory.getObject().getCurrentSession();

        try {
            s.update(store);

            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
        }
        return false;
    }

    @Override
    public List<Object[]> statsAdmin(Map<String, String> params,Store s) {
        
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<Object[]> cr = builder.createQuery(Object[].class);
       
        Root rS = cr.from(Store.class);
        Root rOd = cr.from(Orderdetails.class);
        Root rOr = cr.from(Orders.class);

        String quarter = params.get("quarter");
        String year = params.get("year");
        String month = params.get("month");

        if (params != null && year != null) {
            List<Predicate> predicates = new ArrayList<>();

            predicates.add(builder.equal(rOr.get("storeStoreId"), rS.get("storeId")));
            predicates.add(builder.equal(rOd.get("ordersOrderId"), rOr.get("orderId")));
            predicates.add(builder.equal( rS.get("storeId"),s.getStoreId() ));

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

            cr.where(predicates.toArray(Predicate[]::new));

            cr.multiselect(rS.get("storeId"),
                    rS.get("storeName"),
                    builder.sum(rOd.get("total")));

            Query query = session.createQuery(cr);
            return query.getResultList();
        }
        return null;
    }

}

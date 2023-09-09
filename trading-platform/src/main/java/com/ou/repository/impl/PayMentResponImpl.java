/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Payment;
import com.ou.repository.PayMentRespon;
import java.util.List;
import javax.persistence.Query;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
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
public class PayMentResponImpl implements PayMentRespon {

    @Autowired
    private LocalSessionFactoryBean sessionFactory;

    @Override
    public List<Payment> getListPayment() {
        List<Payment> payment;
        Session session = this.sessionFactory.getObject().getCurrentSession();
        CriteriaBuilder builder = session.getCriteriaBuilder();
        CriteriaQuery<Payment> cr = builder.createQuery(Payment.class);
        Root<Payment> root = cr.from(Payment.class);

        CriteriaQuery query = cr.select(root);

        payment = session.createQuery(query).getResultList();
        return payment;
    }

    @Override
    public Payment getPaymentsById(int id) {
        Session session = this.sessionFactory.getObject().getCurrentSession();

        return session.get(Payment.class, id);
    }

    @Override
    public Payment getPaymentsByName(String name) {
        Session session = this.sessionFactory.getObject().getCurrentSession();
        Query q = session.createQuery("SELECT p FROM Payment p WHERE p.payment = :payment");
        q.setParameter("payment", name);
        return (Payment) q.getSingleResult();

    }

}

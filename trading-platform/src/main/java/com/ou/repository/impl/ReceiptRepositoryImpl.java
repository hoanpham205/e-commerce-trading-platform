/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository.impl;

import com.ou.pojo.Orderdetails;
import com.ou.pojo.Orders;
import com.ou.pojo.Payment;
import com.ou.pojo.cart;
import com.ou.repository.ProductRepon;
import com.ou.repository.ReceiptRepository;
import com.ou.repository.storeRepon;
import com.ou.repository.userRepon;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

/**
 *
 * @author ADMIN
 */
@Repository
@Transactional
public class ReceiptRepositoryImpl implements ReceiptRepository {

    @Autowired
    private LocalSessionFactoryBean factory;

    @Autowired
    private userRepon userRepo;

    @Autowired
    private ProductRepon productRepo;

    @Autowired
    private storeRepon storeRepon;
    
    @Autowired
    private SimpleDateFormat f;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean addReceipt(Map<String, cart> carts) {
        Session s = this.factory.getObject().getCurrentSession();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        try {
            Orders order = new Orders();
            order.setUserId(this.userRepo.getUserByUsername(authentication.getName()));
            order.setStoreStoreId(storeRepon.getStoreByUserID(this.userRepo.getUserByUsername(authentication.getName())));
            order.setOrderDate(new Date());
            s.save(order);
            s.flush();

            for (cart c : carts.values()) {
                Orderdetails d = new Orderdetails();
                d.setQuantity(c.getCount());
                d.setPrice(c.getPrice());
                d.setOrdersOrderId(order);
                d.setProductsProductId(this.productRepo.getProductById(c.getProductId()));
                d.setTotal(c.getPrice().multiply(new BigDecimal(c.getCount())));
                d.setOrdersOrderId(order);
                s.save(d);
            }

            return true;
        } catch (HibernateException ex) {
            ex.printStackTrace();
            return false;
        }
    }

}

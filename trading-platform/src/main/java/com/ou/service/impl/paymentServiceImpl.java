/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.pojo.Payment;
import com.ou.repository.PayMentRespon;
import com.ou.service.paymentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class paymentServiceImpl implements paymentService {

    @Autowired
    private PayMentRespon PayMentRespon;

    @Override
    public List<Payment> getListPayment() {
        return PayMentRespon.getListPayment();
    }

    @Override
    public Payment getPaymentsById(int id) {
        return PayMentRespon.getPaymentsById(id);
    }

    @Override
    public Payment getPaymentsByName(String name) {
        return PayMentRespon.getPaymentsByName(name);
    }

}

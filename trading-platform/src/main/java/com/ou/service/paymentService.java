/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.pojo.Payment;
import java.util.List;

/**
 *
 * @author ADMIN
 */
public interface paymentService {

    public List<Payment> getListPayment();

    public Payment getPaymentsById(int id);
    public Payment getPaymentsByName(String name);

}

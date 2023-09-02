/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.pojo.Payment;
import com.ou.pojo.cart;
import com.ou.repository.ReceiptRepository;
import com.ou.service.ReceiptService;
import com.ou.service.paymentService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class ReceiptServiceImpl implements ReceiptService{
    
    @Autowired
    private ReceiptRepository ReceiptRepository;
    
    @Autowired
    private paymentService paymentService;

    @Override
    public boolean addReceipt(Map<String, cart> carts) {
        
        return ReceiptRepository.addReceipt(carts);
    }
    
}

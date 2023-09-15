/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.pojo.Payment;
import com.ou.pojo.Users;
import com.ou.pojo.cart;
import java.util.Map;

/**
 *
 * @author ADMIN
 */
public interface ReceiptService {

    boolean addReceipt(Map<String, cart> carts,Users user );

}

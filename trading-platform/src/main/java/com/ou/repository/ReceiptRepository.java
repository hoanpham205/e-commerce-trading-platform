/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.cart;
import java.util.Map;

/**
 *
 * @author ADMIN
 */
public interface ReceiptRepository {
        boolean addReceipt(Map<String, cart> carts);

}
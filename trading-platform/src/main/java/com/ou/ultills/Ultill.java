/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.ultills;

import com.ou.pojo.cart;
import java.util.Map;

/**
 *
 * @author ADMIN
 */
public class Ultill {
    
    public  static int countCart( Map<Integer, cart> cart){
        int count =0;
        if(cart!=null){
            for(cart c: cart.values())
                count+=c.getCount();
            
        }
        return count;
    }
    
    
    
}

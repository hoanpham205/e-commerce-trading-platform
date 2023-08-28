/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.pojo;

import java.math.BigDecimal;
import lombok.Data;

/**
 *
 * @author ADMIN
 */
@Data
public class cart {

    private int productId;
    private String name;
    private BigDecimal       price;
    private int count;
}

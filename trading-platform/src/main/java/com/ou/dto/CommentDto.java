/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.dto;

import com.ou.pojo.Products;
import com.ou.pojo.Users;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import javax.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author ADMIN
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentDto {

    private int id;
    @NotBlank
    private String text;
    @NotBlank
    private Users user;
    @NotBlank
    private Products product;
    private Date date;
    @NotBlank
    private double evaluate;
    private List<CommentDto> listReply;
}

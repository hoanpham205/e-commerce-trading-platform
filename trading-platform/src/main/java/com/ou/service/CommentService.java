/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service;

import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import java.util.List;

/**
 *
 * @author ADMIN
 */
public interface CommentService {

    Comments addComment(Comments c, Users userId, int proId,int reply);

    Comments findCommentById(int id);

    List<Comments> findAllCommentsByProductId(Products id);
}

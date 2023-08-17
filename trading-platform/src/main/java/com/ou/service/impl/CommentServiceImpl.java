/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.repository.CommentRepon;
import com.ou.service.CommentService;
import com.ou.service.ProductService;
import java.util.List;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ADMIN
 */
@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    private CommentRepon CommentRepon;

    @Autowired
    private ProductService ProductService;

    @Override
    public Comments addComment(Comments c, Users userId, int proId, int reply) {
        Products p = ProductService.getProductById(proId);
        if (p == null) {
            throw new ResourceNotFoundException("loi ko tim thay product");
        }
        Comments replyComment = null;

        if (reply != 0) {
            replyComment = CommentRepon.findCommentById(reply);

            c.setCommentsCommentId(replyComment);
        }
        c.setUserId(userId);
        c.setProductId(p);
        System.out.println(reply);

        return CommentRepon.addComment(c);
    }

    @Override
    public Comments findCommentById(int id) {
        return CommentRepon.findCommentById(id);
    }

    @Override
    public List<Comments> findAllCommentsByProductId(Products id) {
        return this.CommentRepon.findAllCommentsByProductId(id);
    }

}
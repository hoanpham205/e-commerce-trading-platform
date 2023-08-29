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
import com.ou.service.userService;
import java.util.List;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.hibernate.Session;
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

    @Autowired
    private userService userService;

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

    @Override
    public boolean deleteComment(Comments id) {
        return this.CommentRepon.deleteComment(id);
    }

    @Override
    public boolean deleteComment(int id, int userId) {
        Users u = this.userService.getUserById(userId);
        Comments com = this.getComment(u);
        List<Comments> c = this.getAllByCommentId(com);
        for (Comments comment : c) {
            this.deleteComment((Comments) c);
        }

        return this.CommentRepon.deleteComment(com);
    }

    @Override
    public Comments getComment(Users user) {
        return this.CommentRepon.getComment(user);
    }

    @Override
    public List<Comments> getAllByCommentId(Comments c) {
        return this.getAllByCommentId(c);
    }

    @Override
    public Comments getAllByProductId(Products p) {
        return this.CommentRepon.getAllByProductId(p);
    }

}

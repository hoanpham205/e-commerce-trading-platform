/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.service.impl;

import com.ou.dto.CommentDto;
import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.repository.CommentRepon;
import com.ou.service.CommentService;
import com.ou.service.ProductService;
import com.ou.service.userService;
import java.util.ArrayList;
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

        return CommentRepon.addComment(c);
    }

    @Override
    public CommentDto findCommentById(int id) {
        Comments com = CommentRepon.findCommentById(id);
        List<CommentDto> listDto = new ArrayList<>();
        System.out.println(this.getAllByCommentId(com));
        for (Comments c : this.getAllByCommentId(com)) {

            CommentDto dto1 = CommentDto.builder()
                    .id(c.getCommentId())
                    .text(c.getCommentText())
                    .user(c.getUserId())
                    .product(c.getProductId())
                    .date(c.getCommentDate())
                    .evaluate(c.getEvaluate()).build();
            listDto.add(dto1);
        }

        CommentDto dto = CommentDto.builder()
                .id(com.getCommentId())
                .text(com.getCommentText())
                .user(com.getUserId())
                .product(com.getProductId())
                .date(com.getCommentDate())
                .evaluate(com.getEvaluate())
                .listReply(listDto).build();
        return dto;
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
        return CommentRepon.getAllByCommentId(c);
    }

    @Override
    public Comments getAllByProductId(Products p) {
        return this.CommentRepon.getAllByProductId(p);
    }

}

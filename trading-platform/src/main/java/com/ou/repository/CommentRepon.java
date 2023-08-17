/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import java.util.List;

/**
 *
 * @author ADMIN
 */
public interface CommentRepon {

    Comments addComment(Comments c);

    Comments findCommentById(int id);

    List<Comments> findAllCommentsByProductId(Products id);
}

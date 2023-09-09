/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.repository;

import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import java.util.List;

/**
 *
 * @author ADMIN
 */
public interface CommentRepon {

    Comments addComment(Comments c);

    Comments findCommentById(int id);

    List<Comments> findAllCommentsByProductId(Products id);

    boolean deleteComment(Comments c);

    Comments getCommentByUserId(int id);

    Comments getComment(Users user);

    List<Comments> getAllByCommentId(Comments c);

    Comments getAllByProductId(Products p);

}

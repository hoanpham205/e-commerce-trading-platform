/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.service.CommentService;
import com.ou.service.ProductService;
import com.ou.service.userService;
import java.util.List;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author ADMIN
 */
@RestController
@RequestMapping("/api")
public class ApiConmentControllers {

    @Autowired
    private CommentService CommentService;

    @Autowired
    private userService userService;

    @Autowired
    private ProductService ProductService;

    @Autowired
    private HttpSession session;

    @GetMapping("/product/{id}/comment")
    public ResponseEntity<List<Comments>> getAllCommentsByPost(@PathVariable("id") int id) {
        return new ResponseEntity<>(CommentService.findAllCommentsByProductId(ProductService.getProductById(id)), HttpStatus.OK);
    }

    @PostMapping("/product/{id}/comment")
    public ResponseEntity<?> createCommentToProduct(@RequestBody @Valid Comments c, @PathVariable("id") int id) {
        Users u = (Users) session.getAttribute("currentUser");

//        if (u != null ) {
        Comments comment = CommentService.addComment(c, u, id,0);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
//        } else {
//            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//        }
    }

    @PostMapping("/product/{Proid}/comment/{id}/comments")
    public ResponseEntity<?> replyToComent(@RequestBody @Valid Comments c, @PathVariable("Proid") int proId, @PathVariable("id") int id) {
        Users u = (Users) session.getAttribute("currentUser");

//        if (u != null ) {
        Comments comment = CommentService.addComment(c, u, proId,id);
        return new ResponseEntity<>(comment, HttpStatus.CREATED);
//        } else {
//            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//        }
    }

}

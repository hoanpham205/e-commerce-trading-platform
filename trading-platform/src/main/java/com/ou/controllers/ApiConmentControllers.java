/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.dto.CommentDto;
import com.ou.pojo.Comments;
import com.ou.pojo.Products;
import com.ou.pojo.Store;
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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
@CrossOrigin
public class ApiConmentControllers {

    @Autowired
    private CommentService CommentService;

    @Autowired
    private userService userService;

    @Autowired
    private ProductService ProductService;

    @Autowired
    private HttpSession session;

    //lấy các comment prodcut
    @GetMapping("/product/{id}/comment")
    public ResponseEntity<List<Comments>> getAllCommentsByPost(@PathVariable("id") int id) {
        return new ResponseEntity<>(CommentService.findAllCommentsByProductId(ProductService.getProductById(id)), HttpStatus.OK);
    }

    //comment product
    @PostMapping("/product/{id}/comment")
    public ResponseEntity<?> createCommentToProduct(@RequestBody Comments c, @PathVariable("id") int id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users currentUser = userService.getUsers(userDetails.getUsername());
            Comments comment = CommentService.addComment(c, currentUser, id, 0);
            return new ResponseEntity<>(comment, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    //reply comment
    @PostMapping("/product/{Proid}/comment/{id}/comments")
    public ResponseEntity<?> replyToComent(@RequestBody Comments c, @PathVariable("Proid") int proId, @PathVariable("id") int id) {
        System.out.println(proId);
        System.out.println(id);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users currentUser = userService.getUsers(userDetails.getUsername());
            Comments comment = CommentService.addComment(c, currentUser, proId, id);
            return new ResponseEntity<>(comment == null ? new ResponseEntity<>("You do not have permission to update this comment", HttpStatus.UNAUTHORIZED) : comment, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    //lấy tất cả các reply của comment
    @GetMapping("/comment/{id}")
    public ResponseEntity<?> replyToComentAll(@PathVariable("id") int id) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users currentUser = userService.getUsers(userDetails.getUsername());
            CommentDto com = this.CommentService.findCommentById(id);
//            List<Comments> comment = CommentService.getAllByCommentId(com);
            return new ResponseEntity<>(com == null ? new ResponseEntity<>("You do not have permission to update this comment", HttpStatus.UNAUTHORIZED) : com, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}

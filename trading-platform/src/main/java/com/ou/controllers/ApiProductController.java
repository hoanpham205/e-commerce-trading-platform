/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.pojo.Products;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.pojo.cart;
import com.ou.service.ProductService;
import com.ou.service.ReceiptService;
import com.ou.service.storeService;
import com.ou.service.userService;
import com.ou.ultills.Ultill;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import javax.swing.text.Caret;
import static jdk.internal.org.jline.utils.Colors.s;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ADMIN
 */
@RestController
@RequestMapping("/api")
@ControllerAdvice
public class ApiProductController {

    @Autowired
    private ProductService ProductService;
    @Autowired
    private userService userSer;

    @Autowired
    private storeService storeService;

    @Autowired
    private ReceiptService receiptService;

    @DeleteMapping("/store/product/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") int id) {
        this.ProductService.deleteProduct(id);
    }

    @GetMapping("/cart/{productId}")
    public ResponseEntity<Integer> cart(@PathVariable(value = "productId") Integer productId, HttpSession session) {
        Map<Integer, cart> cart = (Map<Integer, cart>) session.getAttribute("cart");
        if (cart == null) {
            cart = new HashMap<>();
        }
        if (cart.containsKey(productId) == true) {
            cart c = cart.get(productId);
            c.setCount(c.getCount() + 1);
        } else {
            Products p = ProductService.getProductById(productId);
            cart c = new cart();
            c.setProductId(p.getProductId());
            c.setName(p.getProductName());
            c.setPrice(p.getPrice());
            c.setCount(1);
            cart.put(productId, c);
        }
        session.setAttribute("cart", cart);
        return new ResponseEntity<>(Ultill.countCart(cart), HttpStatus.OK);
    }

    @PostMapping("/pay")
    public void add(@RequestBody Map<String, cart> carts) {
        this.receiptService.addReceipt(carts);
    }

    @DeleteMapping("/cart/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCart(Model model, HttpSession session, @PathVariable(value = "id") Integer id) {
        Map<Integer, cart> cart = (Map<Integer, cart>) session.getAttribute("cart");
        if (cart.containsKey(id) == true) {
            cart c = cart.remove(id);
        }
    }

    @GetMapping("/products/")
    @CrossOrigin
    public ResponseEntity<List<Products>> getProduct(@RequestParam Map<String, String> params, HttpSession session, Store s) {
        s = this.storeService.getStoreByUserID((Users) session.getAttribute("currentUser"));
        return new ResponseEntity<>(this.ProductService.getProduct(null, params), HttpStatus.OK);
    }

    @PostMapping("/add-product")
    @CrossOrigin
    public ResponseEntity<Boolean> addProduct(@RequestBody Products p) {
        return new ResponseEntity<>(this.ProductService.addProduct(p), HttpStatus.OK);
    }
}
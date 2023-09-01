/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.dto.ProductDto;
import com.ou.pojo.Categories;
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
import javax.validation.Valid;
import static jdk.internal.org.jline.utils.Colors.s;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author ADMIN
 */
@RestController
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

    // xoá prodcut dc chọn
    @DeleteMapping("/product/{id}/")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") int id) {
        this.ProductService.deleteProduct(id);
    }

    @GetMapping("/cart/{productId}/")
    public ResponseEntity<?> cart(@PathVariable(value = "productId") Integer productId, HttpSession session) {
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
        return new ResponseEntity<>(cart, HttpStatus.OK);
    }

    //thanh toán
    @PostMapping("/pay/")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin
    public void add(@RequestBody Map<String, cart> carts) {
        this.receiptService.addReceipt(carts);
    }

    @DeleteMapping("/cart/delete/{id}/")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<?> deleteCart(Model model, HttpSession session, @PathVariable(value = "id") Integer id) {
        Map<Integer, cart> cart = (Map<Integer, cart>) session.getAttribute("cart");
        if (cart.containsKey(id) == true) {
            cart c = cart.remove(id);
        }
        return new ResponseEntity<>(Ultill.countCart(cart), HttpStatus.OK);

    }

    //lấy tất cả prodcut của thg đăng nhập
    @GetMapping("/products/")
    @CrossOrigin
    public ResponseEntity<List<Products>> getProduct(@RequestParam Map<String, String> params) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users userCuren = userSer.getUsers(userDetails.getUsername());
            Store store = this.storeService.getStoreByUserID(userCuren);
            return new ResponseEntity<>(this.ProductService.getProduct(store, params), HttpStatus.OK);
        }
        return null;

    }

    //thêm prodcut vào store
    @PostMapping("/product/")
    @CrossOrigin
    public ResponseEntity<?> addProduct(@RequestParam Map<String, String> params, @RequestPart MultipartFile file) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users userCuren = userSer.getUsers(userDetails.getUsername());
            Store s = storeService.getStoreByUserID(userCuren);
            ProductDto product = ProductService.addProduct(params, s, file);
            return new ResponseEntity<>(product == null ? new ResponseEntity<>("You do not have permission to update this comment", HttpStatus.UNAUTHORIZED) : product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

    }

    //cập nhật product
    @PutMapping("/product/{id}/")
    public ResponseEntity<?> productDetails(@RequestBody
            @Valid Products p, @PathVariable(value = "id") int id
    ) {

        if (p != null) {
            return new ResponseEntity<>(ProductService.updateProduct(p, id), HttpStatus.OK);
        } else {
            return new ResponseEntity<>("You do not have permission to update this comment", HttpStatus.UNAUTHORIZED);
        }

    }

    @GetMapping("/products/sort-productname/")
    public ResponseEntity<List<Products>> sortProductname(@RequestParam(value = "order", defaultValue = "desc") String Dir) {
        return ResponseEntity.ok(ProductService.sortProductname(Dir));
    }

    @GetMapping("/products/sort-price/")
    public ResponseEntity<List<Products>> sortPrice(@RequestParam(value = "order", defaultValue = "desc") String Dir) {
        return ResponseEntity.ok(ProductService.sortProductPrice(Dir));
    }

    @GetMapping("/stats/")
    public ResponseEntity<?> stats(@RequestParam Map<String, String> params) {
        return ResponseEntity.ok(ProductService.stats(params));
    }
}

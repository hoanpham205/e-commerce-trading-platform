/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.controllers;

import com.ou.dto.logindto;
import com.ou.pojo.Products;
import com.ou.pojo.Users;
import com.ou.security.JwtService;
import com.ou.service.impl.userServiceImpl;
import com.ou.service.storeService;
import com.ou.service.userService;
import com.ou.validator.WebAppValidator;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import org.apache.velocity.tools.config.ValidScope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author ADMIN
 */
@RestController
public class ApiUserController {

    @Autowired
    private userService userService;

    @Autowired
    private JwtService JwtService;

    @Autowired
    private storeService storeService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private HttpServletResponse response;

    @Autowired
    private WebAppValidator PassValidator;

    @DeleteMapping("/user/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") int id) {
        if (storeService.getStoreByUserID(userService.getUserById(id)) != null) {
            this.userService.deleteAcount(id);
        } else {
            storeService.deleteProductByUserId(userService.getUserById(id));
            this.userService.deleteAcount(id);

        }
    }

    @PostMapping("/requestment/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void requestment(@PathVariable(value = "id") int id) {
        storeService.updateStore(storeService.getStoreByUserID(userService.getUserById(id)));

        userService.updateRoleUser(userService.getUserById(id));
    }

    @GetMapping("/requestment/")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<?> requestment() {
        List<Users> user = this.userService.getUserActive();
        if (user != null) {
            return new ResponseEntity<>(user,HttpStatus.OK);

        } else {
            return new ResponseEntity<>("List User Is Null",HttpStatus.UNAUTHORIZED);

        }
    }

    @PostMapping("/login/")
    @CrossOrigin
    public ResponseEntity<?> login(@RequestBody logindto logindto) throws Exception {
        authenticate(logindto.getUsername(), logindto.getPassword());
        final UserDetails userDetails = userService.loadUserByUsername(logindto.getUsername());
        Users user = userService.getUsers(userDetails.getUsername());

        String jwtResponse = JwtService.generateTokenLogin(userDetails.getUsername());
        if (jwtResponse != null) {
            Cookie cookie = new Cookie("JWT_TOKEN", jwtResponse);
            cookie.setPath("/");
            cookie.setMaxAge(3600);

            response.addCookie(cookie);
            return ResponseEntity.ok().body(jwtResponse);
        } else {
            return ResponseEntity.badRequest().body("Username or password is invalid!");

        }

    }

    private void authenticate(String username, String password) throws Exception {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        SecurityContextHolder.getContext().setAuthentication(authentication);

    }

    @GetMapping(path = "/current-user/", produces = MediaType.APPLICATION_JSON_VALUE)
    @CrossOrigin
    public ResponseEntity<Users> details(Principal user) {
        Users u = this.userService.getUsers(user.getName());
        return new ResponseEntity<>(u, HttpStatus.OK);
    }

    @PostMapping(path = "/register/",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE}
    )
    @CrossOrigin
    public ResponseEntity<?> register(@Valid @RequestParam Map<String, String> params, @RequestPart MultipartFile file) throws Exception {
        return new ResponseEntity<>(this.userService.addUsers(params, file), HttpStatus.CREATED);

    }

}

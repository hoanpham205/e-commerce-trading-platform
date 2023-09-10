
package com.ou.controllers;

import com.ou.dto.ProductDto;
import com.ou.pojo.Store;
import com.ou.pojo.Users;
import com.ou.service.CategoriService;
import com.ou.service.ProductService;
import com.ou.service.storeService;
import com.ou.service.userService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author ADMINasd
 */
@Controller
public class AdminController {

    @Autowired
    private userService userService;

    @Autowired
    private storeService storeService;

    @Autowired
    private ProductService ProductService;

    @Autowired
    private CategoriService CategoriService;

    @GetMapping("/")
    public String getAllUSer(Model model) {

        model.addAttribute("user", this.userService.getAllUser());
        return "admin";
    }



   

    @GetMapping("/store-manager")
    public String getAllStore(@RequestParam Map<String, String> params, Model model) {
        model.addAttribute("store", storeService.getStore(params));
        return "storeManager";
    }

    @GetMapping("/stat/")
    public String stats(Model model, @RequestParam Map<String, String> params) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && !(authentication instanceof AnonymousAuthenticationToken)) {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
            Users currentUser = userService.getUsers(userDetails.getUsername());
            model.addAttribute("chartData", ProductService.stats(params));
            return "stat";
        } else {
            return "stat";
        }
    }

    @GetMapping("/requestment")
    public String requestment(Model model) {
        model.addAttribute("request", userService.getUserActive());
        return "request";
    }

    @GetMapping("/store/{id}")
    public String stats(Model model, @RequestParam Map<String, String> params, @PathVariable int id) {

        model.addAttribute("store", this.storeService.getStoreByID(id));
        model.addAttribute("stat", storeService.statsAdmin(params, this.storeService.getStoreByID(id)));
        return "statAdmin";

    }
}


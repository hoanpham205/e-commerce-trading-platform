/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ou.validator;
import com.ou.pojo.Users;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
/**
 *
 * @author ADMIN
 */
public class PassValidator implements Validator {

    @Override
    public boolean supports(Class<?> clazz) {
        return Users.class.isAssignableFrom(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        Users a = (Users) target;
        if (a.getUsername().contains(" ")) {
            errors.reject("username", "user.username.spaceErr");
        }

        if (a.getUsername().length()<8) {
            errors.rejectValue("password", "account.password.error.notMatchMsg");
        }
    }

}

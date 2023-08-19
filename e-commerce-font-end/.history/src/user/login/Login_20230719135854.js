import React from "react";
import {useForm} from 'react-hook-form'

const Login = ()=> {
    const {
        handleSubmit,
        register,
        formState:{ errors },
    }= useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
  return (
    <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}><form></form>
        
    </div>
  )  
}
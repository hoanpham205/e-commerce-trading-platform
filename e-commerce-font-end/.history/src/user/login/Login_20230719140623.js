import React from "react";
import {useForm} from 'react-hook-form'
import 'Lo'

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Email.."{...register('email',{required: 'Email is required',
            pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message:'Invalid email address'
            },
            })} />
        
        {errors.email && <p>{errors.email.message}</p>}
        <input type="password" placeholder="Password..." {...register('password',{required: 'Password is required'})} />
        {errors.password && <p>{errors.password.message}</p>}
        <button type="submit">Login</button>
        </form>
    </div>
  )  
}
export default Login
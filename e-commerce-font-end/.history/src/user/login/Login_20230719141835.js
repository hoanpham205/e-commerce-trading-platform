
import './Login.css';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const simulateLoginRequest = (data) => {
    // Fake function to simulate login request
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data.email === 'test@example.com' && data.password === 'password') {
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };

  const onSubmit = (data) => {
    simulateLoginRequest(data)
      .then(() => {
        // Login successful
        console.log('Login successful');
      })
      .catch((error) => {
        // Login failed
        console.error(error.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;




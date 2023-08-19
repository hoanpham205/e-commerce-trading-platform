
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
    <div className="container">
      <div
    </div>
  );
};

export default Login;




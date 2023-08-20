import React Ơ from "react";
import {useForm} from 'react-hook-form'
import './Login.css';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
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
      setErrorMessage('');
      simulateLoginRequest(data)
        .then(() => {
          // Login successful
          console.log('Login successful');
        })
        .catch((error) => {
          // Login failed
          setErrorMessage(error.message);
        });
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
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
          {errors.email && <p>{errors.email.message}</p>}
  
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
  
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };
  
  export default Login;
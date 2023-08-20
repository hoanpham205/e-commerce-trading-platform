import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState,useContext } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../components/Helmet/Helmet';
import { auth } from '../firebase.config';
import '../styles/login.css';
import { loginStart,loginSuccess } from '../redux/slices/authSlice';

import cookie from "react-cookies";
import Apis, { authApi, endpoints, loginUser } from "../configs/Apis";



const Login = () => {
    //const [email,setEmail] = useState('');
    
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const dis
    const navigate = useNavigate()
    const signIn = async (e)=>{
        e.preventDefault();
        setLoading(true);
        // try {
        //     const userCredential = await signInWithEmailAndPassword(username, password)
        //     const user = userCredential.user
        //     console.log(user);
        //     setLoading(false);
        //     toast.success("User signed in successfully");
        //     navigate('/checkout');
        // }
        // catch(e){
        //     setLoading(false);
        //     toast.error(e.message);    
        // }
        const newUser = {username: username, password: password}
        loginUser(newUser, distch)
    }

    
    
    return <Helmet title = 'Login'>
        <section>
            <Container>
                <Row>
                    {
                        loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading...</h5></Col>:
                        <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Login</h3>
                        <Form className='auth__form' onSubmit={signIn}>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Enter your email...' value={username} onChange={e=>setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="password" placeholder='Enter your password...' value={password} onChange={e=>setPassword(e.target.value)}/>
                            </FormGroup>

                            <button type='submit' className="buy__btn auth__btn">Login</button>
                            <p>Don't have account? <Link to='/signup'>Create an account</Link></p>
                        </Form>
                    </Col>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Login;

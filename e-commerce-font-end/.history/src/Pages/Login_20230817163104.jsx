import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../components/Helmet/Helmet';
import { auth } from '../firebase.config';
import '../styles/login.css';
import axios from 'axios';


const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleLogin = () => {
        axios.post('/api/login', { email, password })
            .then(response => {
                alert(response.data);
            })
            .catch(error => {
                console.error('Error logging in:', error);
            });
    };
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate()
    const signIn = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            const user = userCredential.user
            console.log(user);
            setLoading(false);
            toast.success("User signed in successfully");
            navigate('/checkout');
        }
        catch(e){
            setLoading(false);
            toast.error(e.message);    
        }
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
                                <input type="email" placeholder='Enter your email...' value={email} onChange={e=>setEmail(e.target.value)} />
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

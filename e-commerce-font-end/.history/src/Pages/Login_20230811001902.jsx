import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../components/Helmet/Helmet';
import { auth } from '../firebase.config';
import '../styles/login.css';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
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
                        loading ? 
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Login;

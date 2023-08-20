import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Helmet from '../components/Helmet/Helmet';
import '../styles/login.css';





const Signup = () => {
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [file,setFile] = useState(null);
    const [loading,setLoading] = useState(false)
    const [role, setRole] = useState('individual');
    const navigate = useNavigate()

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
  };
  const

    return <Helmet title = 'Signup'>
        <section>
            <Container>
                <Row>
                    {
                        loading?<Col lg='12' className='text-center'><h5 className='fw-bold'>Loading...</h5></Col>:
                        <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Signup</h3>
                        <Form className='auth__form' onSubmit={}>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='User Name' value={username} onChange={e=>setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email...' value={email} onChange={e=>setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="password" placeholder='Enter your password...' value={password} onChange={e=>setPassword(e.target.value)}/>
                            </FormGroup>
                            {/* <FormGroup className='form__group'>
                                <input type="file"  onChange={e=>setFile(e.target.file[0])}/>
                            </FormGroup> */}
                            <FormGroup className='form__group'>
                                <input type="file" onChange={handleFileChange} />
                            </FormGroup>
                            {/* <FormGroup className='form__group'>
                              <select value={role} onChange={(e) => setRole(e.target.value)}>
                                  <option value="individual">Individual User</option>
                                  <option value="seller">Merchant/Business</option>
                              </select>
                            </FormGroup> */}
                            <button type='submit' className="buy__btn auth__btn" onClick={signup} disabled={loading}>
                              {loading ? "Loading..." : "Submit"}
                            </button>
                            {/* <button type='submit' className="buy__btn auth__btn">Submit</button> */}
                            <p>Already have account? <Link to='/login'>Login</Link></p>
                        </Form>
                    </Col>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Signup;

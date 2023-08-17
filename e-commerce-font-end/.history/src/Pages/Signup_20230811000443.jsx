import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import '../styles/login.css';
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { auth,db } from '../firebase.config';


const Signup = () => {
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [file,setFile] = useState(null);
    const [loading,setLoading] = useState(false)
    const [role, setRole] = useState('individual');

    const handleFileChange = (e) => {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
  };
    const signup = async(e)=>{
      e.preventDefault()
      setLoading(true);

      try{
          const userCredential = await createUserWithEmailAndPassword(auth,email,password)
          const user= userCredential.user;
          console.log(user);
          let avatarUrl = null;
            if (file) {
                const storage = getStorage();
                const avatarRef = ref(storage, `avatars/${user.uid}`);
                await uploadBytes(avatarRef, file);
                avatarUrl = await getDownloadURL(avatarRef);
              }
          const userDocRef = doc(db, "users", user.uid);
            await setDoc(userDocRef, {
                uid: user.uid,
                username: username,
                email: email,
                avatarUrl: avatarUrl,
                role: role,
                // Thêm các trường khác của người dùng ở đây
            });
            //Xác nhận đăng ký vai trò người bán
            if (role === 'seller') {
                const requestDocRef = doc(db, "seller_requests", user.uid);
                await setDoc(requestDocRef, {
                    uid: user.uid,
                    status: 'pending', // Trạng thái xác nhận: 'pending', 'approved', 'rejected'
                });
            }

            setLoading(false);
      }catch(error){
        console.error("Đăng ký thất bại", error);
            setLoading(false);
            toast.error("some"
    }
  }
    return <Helmet title = 'Signup'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Signup</h3>
                        <Form className='auth__form'>
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
                            <FormGroup className='form__group'>
                              <select value={role} onChange={(e) => setRole(e.target.value)}>
                                  <option value="individual">Individual User</option>
                                  <option value="seller">Merchant/Business</option>
                              </select>
                            </FormGroup>
                            <button type='submit' className="buy__btn auth__btn" onClick={signup} disabled={loading}>
                              {loading ? "Loading..." : "Submit"}
                            </button>
                            {/* <button type='submit' className="buy__btn auth__btn">Submit</button> */}
                            <p>Already have account? <Link to='/login'>Login</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Signup;

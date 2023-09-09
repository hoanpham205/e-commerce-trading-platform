import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";

import "../styles/login.css";

import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../redux/slices/authSlice";

const Login = () => {
  //const [email,setEmail] = useState('');

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signIn = async (e) => {
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
    const newUser = { username: username, password: password };

    dispatch(loginStart());
    try {
      const res = await axios.post(
        "http://localhost:8080/trading-platform/login/",
        newUser
      );
      
    //     console.log(user);
    //     setLoading(false);
    //     toast.success("User signed in successfully");
    cookie.save("token", res.data);
      dispatch(loginSuccess(res.data));
      
      navigate("/home");

      setLoading(false);
      toast.success("User signed in successfully");
    } catch (e) {
      dispatch(loginFailed());
      setLoading(false);
      toast.error(e.message);
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <ProgressBar
                  height="80"
                  width="80"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#F4442E"
                  barColor="#51E5FF"
                />
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4">Login</h3>
                <Form className="auth__form" onSubmit={signIn}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your email..."
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter your password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>

                  <button type="submit" className="buy__btn auth__btn">
                    Login
                  </button>
                  <p>
                    Don't have account?{" "}
                    <Link to="/signup">Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;

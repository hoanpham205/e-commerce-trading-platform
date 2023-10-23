import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { ProgressBar } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import imEmpty from 'validator/lib/isEmpty';
import Helmet from "../components/Helmet/Helmet";
import axios, { endpoints } from "../configs/Apis";
import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../redux/slices/authSlice";
import "../styles/login.css";

const Login = () => {
  //const [email,setEmail] = useState('');

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationMsg, setValidationMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateAll = () => {
    const msg = {};
    if (imEmpty(username)) {
      msg.username = "Username is required";
    }
    if (imEmpty(password)) {
      msg.password = "Password is required";
    }
    setValidationMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  }
  const signIn = async (e) => {
    const isValid = validateAll();
    if (!isValid) return;
    e.preventDefault();
    setLoading(true);
    const newUser = { username: username, password: password };

    dispatch(loginStart());
    try {
      const res = await axios.post(
        endpoints['login'],
        newUser
      );

      cookie.save("token", res.data);

      const userDataRes = await axios.get(
        endpoints['current-user'],
        {
          headers: {
            Authorization: res.data,
          },
        }
      );
      cookie.save("user", userDataRes.data);

      dispatch(loginSuccess(userDataRes.data));
      (userDataRes.data.roleId.roleName === "ADMIN") ? navigate("/dashboard"):navigate("/home");
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
                    <p className="text-danger text-italic ">{validationMsg.username}</p>
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter your password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}f
                    />
                    <p className="text-danger text-italic ">{validationMsg.password}</p>
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

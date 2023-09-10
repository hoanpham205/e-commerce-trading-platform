import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import cookie from "react-cookies";
import { InfinitySpin } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import axios from "./configs/Apis";
import { loginSuccess } from "./redux/slices/authSlice";

function App() {
  const [firstLoad, setFirstLoad] = useState(false);
  const dispatch =useDispatch()
  useEffect(() => {
    // const token = localStorage.getItem("accessToken");
    // Gửi yêu cầu API để lấy dữ liệu người dùng

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/trading-platform/api/current-user/",
          {
            headers: {
              Authorization: cookie.load("token"),
            },
          }
        );
       
        const user = response.data;
        dispatch(loginSuccess(user));

      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      }
    };
    if  (cookie.load("token") != null)
    fetchData();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(true);
    }, 3000);
  }, []);
  return (
    <>
      {firstLoad ? (
        <Layout />
      ) : (
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <InfinitySpin width="200" color="#0a1d37" />
        </Container>
      )}
    </>
  );
}

export default App;

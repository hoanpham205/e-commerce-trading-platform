import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { InfinitySpin } from "react-loader-spinner";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  const [firstLoad, setFirstLoad] = useState(false);
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
        setCurrentUser(response.data);
        console.log(response.data); // Cập nhật state với dữ liệu người dùng
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu người dùng:", error);
      }
    };

    if (isLoggedIn) fetchData();
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

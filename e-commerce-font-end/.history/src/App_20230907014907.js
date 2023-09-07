import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { InfinitySpin } from "react-loader-spinner";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  const [user,dis]
  const [firstLoad, setFirstLoad] = useState(false);

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

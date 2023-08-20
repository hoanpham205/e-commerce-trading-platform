import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { PacmanLoader } from "react-spinners";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  const [firstLoad, setFirstLoad] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFirstLoad(true);
  //   }, 3000);
  // }, []);
  return (
    <>
      {firstLoad ? (
        <Layout />
      ) : (
        <Container
          className="d-flex align-items-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <InfinitySpin 
  width='200'
  color="#4fa94d"
/>
        </Container>
      )}
    </>
  );
}

export default App;

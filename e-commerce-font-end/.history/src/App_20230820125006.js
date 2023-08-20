import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { PacmanLoader } from "react-spinners";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
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
        <Container className="d-flex align-items-center" style={{width: "100vw"}}>
          <PacmanLoader color="#ad36d6" />
        </Container>
      )}
    </>
  );
}

export default App;

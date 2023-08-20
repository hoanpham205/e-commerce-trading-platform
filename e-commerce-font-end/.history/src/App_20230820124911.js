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
        <Container className="m-auto -center w-100 h-100">
          <PacmanLoader color="#ad36d6" />
        </Container>
      )}
    </>
  );
}

export default App;

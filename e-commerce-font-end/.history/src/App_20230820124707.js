import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { Container } from "react-bootstrap";

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
        <Container className="flex flex-w">
          <PacmanLoader color="#ad36d6" />
        </Container>
      )}
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinner";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFirstLoad(true)
    }, 3000)
  }, []);
  return (
    <>
      {firstLoad ? (
        <Layout />
      ) : (
        <PacmanLoader color="#ad36d6" />
      )}
    </>
  );
}

export default App;

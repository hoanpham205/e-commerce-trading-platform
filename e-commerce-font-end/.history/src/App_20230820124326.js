import React, { useEffect, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
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
      {!firstLoad ? (
        <Layout />
      ) : (
        <ProgressBar
          height="80"
          width="80"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
      )}
    </>
  );
}

export default App;

import "./App.css";
import React from "react";
import Layout from "./components/Layout/Layout";
import { createContext, useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";

function App() {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {}, []);
  return (
    <>
      {!firstLoad ? (
        <Layout />
      ) : (
        <ProgressBarr
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

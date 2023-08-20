import "./App.css";
import React from 'react';
import Layout from './components/Layout/Layout';
import { createContext, useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [firstLoad, setFirstLoad] = useState(false)

  useEffect(() => {}, [])
  return {!firstLoad ? <Layout/> : 
}

export default App;
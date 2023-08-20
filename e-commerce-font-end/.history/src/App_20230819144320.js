import "./App.css";
import React from 'react';
import Layout from './components/Layout/Layout';
import { createContext, useReducer } from "react";

function App() {
  const [user, dispatch] = useReducer(MyUserReducer, cookie.load("user") || null);
  return <Layout/>
}

export default App;
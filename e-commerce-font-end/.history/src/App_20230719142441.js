import React, { Component } from 'react';
import { BrowserRouter as Routers, Switch, Route } from 'react-router-dom';
import Login from './user/login/Login';
import Signup from './user/signup/Signup';


import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

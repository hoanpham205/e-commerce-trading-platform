import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './user/login/Login';
import Signup from './user/signup/Signup';


import './App.css';

function App() {
  return (
    <Router>
    <Route exact path="/" component={LoginPage} />
    <Route path="/signup" component={SignupPage} />
  </Router>
  );
}

export default App;

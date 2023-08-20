import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './user/login/Login';


import './App.css';

function App() {
  return (
    <Router>
      
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';

import Login from './user/login/Login';


import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
}

export default App;

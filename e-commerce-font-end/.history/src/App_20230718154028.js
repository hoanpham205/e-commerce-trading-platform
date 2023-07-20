import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from '../user/login/Login';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';


function App() {
 
  return (
    <div className="App">
    <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>

    </div>
  );
}

export default App;

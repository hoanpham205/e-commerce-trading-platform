import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 
import Login from '../user/login/Login';"react-router-dom";
import './App.css';
import User from "./Pages/images/User";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
    </BrowserRouter>
      
    </div>
  );
}

export default App;

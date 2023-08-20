import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from
"react-router-dom";
import Login from '../user/login/Login';
import './App.css';


function App() {
  return (
    <div className="App">
    <Switch></Switch>
    <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
      
    </div>
  );
}

export default App;

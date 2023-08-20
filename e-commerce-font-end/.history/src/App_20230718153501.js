import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from
"react-router-dom";
import Login from './src/user/Login';
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

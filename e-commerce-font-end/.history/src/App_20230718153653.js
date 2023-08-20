import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from
"react-router-dom";
import Login from '../user//Login';
import './App.css';


function App() {
  return (
    <div className="App">
    <Switch>
    <Route path="/login"
              render={(props) => <Login authenticated={this.state.authenticated} {...props} />}></Route>
    </Switch>
      
    </div>
  );
}

export default App;

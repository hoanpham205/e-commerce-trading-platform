import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import User from "./Pages/images/User";

function App() {
  return (
    <div className="App">
    <BrowserRouter
      <Route path="/" element={<User />} />
    </div>
  );
}

export default App;

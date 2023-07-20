import logo from './logo.svg';
import './App.css';
import User from "./Pages/signin/User";

function App() {
  return (
    <div className="App">
      <Route path="/" element={<User />} />
    </div>
  );
}

export default App;

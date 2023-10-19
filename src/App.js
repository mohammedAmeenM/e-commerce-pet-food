import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Dog from "./components/Dog";
import Cat from "./components/Cat";
import Collection from "./components/Collection";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import { createContext, useState } from "react";

export const UserLogin = createContext();

function App() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <UserLogin.Provider value={{ user, setUser, login, setLogin }}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </UserLogin.Provider>
    </div>
  );
}

export default App;

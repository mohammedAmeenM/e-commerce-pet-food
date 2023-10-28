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
import { Product } from "./components/ProductData";
import ViewProduct from "./components/ViewProduct";
import AdminLogin from "./admin/AdminLogin";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminMainPage from "./admin/AdminMainPage";
import AdminUsers from "./admin/AdminUsers";
import SideBar from "./admin/SideBar";



export const UserLogin = createContext();

function App() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState(false);
  const [product]=useState(Product);
  const [cart,setCart]=useState([]);
  const [search,setSearch]=useState('');
  

  return (
    <div className="App">
      <UserLogin.Provider value={{ user, setUser, login, setLogin,product,cart,setCart,search,setSearch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/viewproduct/:id" element={<ViewProduct />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path='/adminpage' element={<AdminMainPage />} />
          <Route path="/adminuser" element={<AdminUsers />} />
          <Route path="/side" element={<SideBar />} />
        </Routes>
      </UserLogin.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;

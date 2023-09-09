import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../admin/Dashboard";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Seller from "../pages/Seller";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import ShopCreate from "..components/Shop/ShopCreate";
//import SellerDashboard from '../pages/SellerDashboard'

function Routers() {
  //const { user } = userAuth();
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shop-create" element={<C />} />

      <Route path="/*" element={<ProtectedRoute />}>
        {/* {auth.login.role === "admin" ? <></> : auth.login.role === "store" ? <></> : <></>} */}

        <Route path="seller/addproduct" element={<AddProduct />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="seller" element={<Seller />} />
      </Route>
      <Route path="/dash" element={<Dashboard />}>
        <Route path="home" element={<Checkout />} />
        <Route path="products" element={<Seller />} />
        <Route path="users" element={<AddProduct />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default Routers;

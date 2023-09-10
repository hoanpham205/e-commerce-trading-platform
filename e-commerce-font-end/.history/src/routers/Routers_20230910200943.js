import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../admin/Dashboard";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
// import Seller from "../pages/Seller";
import SellerDashboard from "../pages/SellerDashboard";
import Shop from "../pages/Shop";
import ShopCreatePage from "../pages/ShopCreatePage";
import ShopDashboardPage from "../pages/ShopDashboard";
import ShopLoginPage from "../pages/ShopLoginPage";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
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
      <Route path="shop-create" element={<ShopCreatePage />} />
      <Route path="/dashboard" element={<ShopDashboardPage />} />
      <Route path="/sellerDashboard" element={<SellerDashboard />}>
        <Route path="add" element={<AddProduct />} />
      </Route>
      <Route path="/shop-login" element={<ShopLoginPage />} />
      {/* <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        /> */}


      <Route path="/*" element={<ProtectedRoute />}>
        {/* {auth.login.role === "admin" ? <></> : auth.login.role === "store" ? <></> : <></>} */}
      <Route path="checkout" element={<Checkout />} />

        {/* <Route path="seller/addproduct" element={<AddProduct />} /> */}
      </Route>
      <Route path="/dash" element={<Dashboard />}>
        <Route path="home" element={<Checkout />} />
        {/* <Route path="products" element={<Seller />} /> */}
        <Route path="users" element={<AddProduct />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default Routers;

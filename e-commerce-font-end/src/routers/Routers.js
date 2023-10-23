import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import AddProducts from "../admin/AddProducts";
import AllProducts from "../admin/AllProducts";
import Users from "../admin/Users";
import AddProduct from "../pages/AddProduct";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";

import SellerDashboard from "../pages/SellerDashboard";
import Shop from "../pages/Shop";
import ShopCreatePage from "../pages/ShopCreatePage";

import Chart from "../admin/Chart";
import Dashboard from "../admin/Dashboard";
import MyShop from "../pages/MyShop";
import ShopLoginPage from "../pages/ShopLoginPage";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import AllStore from "../admin/AllStore";
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
      
      <Route path="/sellerDashboard" element={<SellerDashboard />}>
        <Route path="add" element={<AddProduct />} />
        <Route path="my-shop" element={<MyShop />} />
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
      
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="dashboard/add-products" element={<AddProducts />} />
      <Route path="dashboard/chart" element={<Chart />} />
      <Route path="dashboard/all-products" element={<AllProducts />} />
      <Route path="dashboard/all-stores" element={<AllStore />} />
      <Route path="dashboard/users" element={<Users />} />

        {/* <Route path="seller/addproduct" element={<AddProduct />} /> */}
      </Route>
      {/* <Route path="/dash" element={<Dashboard />}>
        <Route path="home" element={<Checkout />} />
        
        <Route path="users" element={<AddProduct />} />
      </Route> */}

      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}

export default Routers;

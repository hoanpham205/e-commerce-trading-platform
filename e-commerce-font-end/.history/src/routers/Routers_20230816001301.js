import React from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import AddProduct from '../pages/AddProduct'
//import SellerDashboard from '../pages/SellerDashboard'

function Routers() {
  //const { user } = userAuth();
  return(
  <Routes>
    <Route path="/" element={<Navigate to='/home'/>}/>
    <Route path='home' element={<Home />}/>
    <Route path='shop' element={<Shop />}/>
    <Route path='shop/:id' element={<ProductDetails />}/>
    <Route path='cart' element={<Cart />}/>
    <Route path='/*' element={<ProtectedRoute>
      
      <Route path='checkout' element={<Checkout />}/>
      <Route path='addproduct' element={<AddProduct />}/>
    </ProtectedRoute> }/>

    
    <Route path='login' element={<Login />}/>
    <Route path='signup' element={<Signup />}/>
    
  </Routes>
  )
  
}

export default Routers
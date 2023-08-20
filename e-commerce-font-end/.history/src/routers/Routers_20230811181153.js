import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import SellerDashboard from '../pages/SellerDashboard'

function Routers() {
  //const { user } = userAuth();
  return(
  <Routes>
    <Route path="/" element={<Navigate to='/home'/>}/>
    <Route path='home' element={<Home />}/>
    <Route path='shop' element={<Shop />}/>
    <Route path='shop/:id' element={<ProductDetails />}/>
    <Route path='cart' element={<Cart />}/>
    <Route path='checkout' element={<Checkout />}/>
    <Route path='login' element={<Login />}/>
    <Route path='signup' element={<Signup />}/>
    //{user.role === 'seller' && (
        <>
          <Route path="seller" element={<SellerDashboard />} />
          {/* Các tuyến đường khác dành cho người bán */}
        </>
      )}
  </Routes>
  )
  
}

export default Routers
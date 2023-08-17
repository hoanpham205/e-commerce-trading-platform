import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function Routers() {
  return<Routes>
    <Route path='home' element={<Home />}/>
    <Route path='shop' element={<Shop />}/>
    <Route path='shop/:id' element={<ProductDetails />}/>
    <Route path='cart' element={<Cart />}/>
    <Route path='checkout' element={<Checkout />}/>
    <Route path='home' element={<Home />}/>
    <Route path='home' element={<Home />}/>
  </Routes>
    
  
}

export default Routers
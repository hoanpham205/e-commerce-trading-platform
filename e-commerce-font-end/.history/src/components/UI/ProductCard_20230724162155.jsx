import React from 'react'
import productImg from '../../assets/img/arm-chair-01.jpg'
import {motion } from 'framer-motion'
import '../../style/product-card.css'
const ProductCard = () => {
  return(
    <div className="product__item">
        <div className="product__img">
            <img src={productImg} alt="" />
        </div>
        <h3></h3>
    </div>
  )
   
}

export default ProductCard

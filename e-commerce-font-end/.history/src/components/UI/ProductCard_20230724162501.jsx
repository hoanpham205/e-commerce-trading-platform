import React from 'react'
import productImg from '../../assets/img/arm-chair-01.jpg'
import {motion } from 'framer-motion'
import '../../style/product-card.css'
import { Col } from 'react-bootstrap'
const ProductCard = () => {
  return(
    <Col lg='3' md = '4'>
        <div className="product__item">
        <div className="product__img">
            <img src={productImg} alt="" />
        </div>
        <h3 className="product__name">Modern Armchair</h3>
        <span>Chair</span>
        <div className="product__card-bottom">
            <span className="price">$299</span>
            <span>
                <i class="ri-add-line"></i>
            </span>
        </div>
    </div>
    </Col>
  )
   
}

export default ProductCard

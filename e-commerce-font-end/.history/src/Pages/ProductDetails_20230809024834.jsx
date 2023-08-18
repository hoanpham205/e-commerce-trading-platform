import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import ProductsList from '../components/UI/ProductsList';
import { cartActions } from '../redux/slices/cartSlice';
import '../styles/product-details.css';

const ProductDetails = () => {

    const[tab,setTab] = useState('desc')
    const reviewUser = useRef('')
    const reviewMsg = useRef('')
    const dispatch = useDispatch()

    const[rating,setRating] = useState(null);
    const {id} = useParams();
    const product = products.find(item => item.id === id)
    const {imgUrl,productName, price,avgRating, reviews, description,shortDesc,category}=product;
    const relatedProducts = products.filter(item => item.category===category)
    const submitHandler = (e)=>{
        e.preventDefault();
        const reviewUserName = reviewUser.current.value
        const reviewUserMsg = reviewMsg.current.value
    }
    const addToCart = ()=>{
        dispatch(cartActions.addItem({
           id,
           image 
        }))
    }

    return <Helmet title = {productName}>
        <CommonSection title = {productName}/>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="product__details">
                                <h2>{productName}</h2>
                                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                                    <div>
                                        <span onClick={()=>setRating(1)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={()=>setRating(2)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={()=>setRating(3)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={()=>setRating(4)}><i class="ri-star-s-fill"></i></span>
                                        <span onClick={()=>setRating(5)}><i class="ri-star-half-s-line"></i></span>
                                    </div>
                                    <p>({avgRating}ratings)</p>
                                </div>
                                <div className='d-flex align-items-center gap-5 mb-3'>
                                    <span className='product__price'>${price}</span>
                                    <span>Category: {category.toUpperCase()}</span>
                                </div>
                                <p>{shortDesc}</p>
                                <motion.button whileTap={{scale:1.2}}className="buy__btn">Add to Cart</motion.button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="tab__wrapper d-flex align-items-center gap-5">
                                <h6 className={`${tab === 'desc'? 'active__tab':''}`} onClick={()=> setTab('desc')}>Description</h6>
                                <h6 className={`${tab === 'rev'? 'active__tab':''}`} onClick={()=> setTab('rev')}>Reviews ({reviews.length})</h6>
                            </div>
                            {
                                tab === 'desc' ? (
                                    <div className="tab__content mt-5">
                                <p>{description}</p>
                            </div>): (
                                <div className='product__review mt-5'>
                                    <div className="review__wrapper">
                                        <ul>
                                        {reviews?.map((item,index)=> (
                                            <li key={index} className='mb-4'>
                                                <h6>Phi Hoan Dep Trai</h6>
                                                <span>{item.rating}( rating)</span>
                                                <p>{item.text}</p>
                                            </li>
                                        ))
                                        }    
                                        </ul>
                                        <div className="review__form">
                                        <h4>Leave your experience</h4>
                                            <form action="" onSubmit={submitHandler}>
                                                <div className="form__group">
                                                    <input type="text" placeholder='Enter name... ' ref={reviewUser} />
                                                </div>

                                                <div className="form__group d-flex align-items-center gap-5">
                                                    <span>1 <i class="ri-star-s-fill"></i></span>
                                                    <span>2 <i class="ri-star-s-fill"></i></span>
                                                    <span>3 <i class="ri-star-s-fill"></i></span>
                                                    <span>4 <i class="ri-star-s-fill"></i></span>
                                                    <span>5 <i class="ri-star-s-fill"></i></span>
                                                </div>

                                                <div className="form__group">
                                                    <textarea ref={reviewUser} rows={4} type="text" placeholder='Review message... ' />
                                                </div>
                                                <button type='submit' className='buy__btn'>Submit</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>)}  
                        </Col>
                        <Col lg='12' className='mt-5'>
                            <h2 className="related__title">You might also like</h2>
                        </Col>
                        <ProductsList data={relatedProducts}/>
                    </Row>
                </Container>
            </section>
        
    </Helmet>
}

export default ProductDetails;
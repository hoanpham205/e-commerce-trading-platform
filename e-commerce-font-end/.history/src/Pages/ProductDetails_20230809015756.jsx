import { motion } from 'framer-motion';
import React,{useState} from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/product-details.css';

const ProductDetails = () => {

    const[tab,setTab] = useState('desc')
    const {id} = useParams();
    const product = products.find(item => item.id === id)
    const {imgUrl,productName, price,avgRating, reviews, description,shortDesc}=product;
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
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-s-fill"></i></span>
                                        <span><i class="ri-star-half-s-line"></i></span>
                                    </div>
                                    <p>({avgRating}ratings)</p>
                                </div>
                                <span className='product__price'>${price}</span>
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
                                <h6 className={`${tab === 'desc'? }`}>Description</h6>
                                <h6>Reviews ({reviews.length})</h6>
                            </div>

                            <div className="tab__content mt-5">
                                <p>{description}</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        
    </Helmet>
}

export default ProductDetails;

import React from 'react';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/product-details.css'

const ProductDetails = () => {
    const {id} = useParams();
    const product = products.find(item => item.id === id)
    const {imgUrl,productName, price,avgRating, review, description,shortDesc}=product;
    return <Helmet>
        <CommonSection>
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
                                <span className='product__price'>{price}</span>
                                <p>{shortDesc}</p>
                                <button className="buy__btn">Add to Cart</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonSection>
    </Helmet>
}

export default ProductDetails;

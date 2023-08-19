import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import products from '../assets/data/products'; 
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const product = products.find(item => item.id === id)
    const {imgUrl,productName, price,avgRating, review, description}=product;
    return <Helmet>
        <CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={imgUrl} alt="" />
                        </Col>
                        <Col lg='6'>
                            <div className="product__details"></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonSection>
    </Helmet>
}

export default ProductDetails;

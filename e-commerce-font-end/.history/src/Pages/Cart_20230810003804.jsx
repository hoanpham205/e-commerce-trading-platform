import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/cart.css';

const Cart = () => {
    return <Helmet title='Cart'>
        <CommonSection title='Shopping Cart'/>
        <section>
            <Container>
                <Row>
                    <Col lg='9'>
                        
                    </Col>
                    <Col lg='3'></Col>
                </Row>
            </Container>
        </section>
   
    </Helmet>
}

export default Cart;

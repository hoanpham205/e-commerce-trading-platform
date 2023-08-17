import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/cart.css';

import { useSelector } from 'react-redux';
import tdImg from '../assets/img/arm-chair-01.jpg';

const Cart = () => {
    const cartItems = useSelector(state=> state.cart.cartItems);
    
    return <Helmet title='Cart'>
        <CommonSection title='Shopping Cart'/>
        <section>
            <Container>
                <Row>
                    <Col lg='9'>
                    {
                        cartItems.length===0? <h2>No item added to the cart</h2>: 
                    }
                        
                    </Col>
                    <Col lg='3'></Col>
                </Row>
            </Container>
        </section>
   
    </Helmet>
}

export default Cart;

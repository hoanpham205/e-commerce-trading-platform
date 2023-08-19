import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, } from 'react-bootstrap';

const Cart = () => {
    return <Helmet title='Cart'>
        <CommonSection title='Shopping Cart'/>
        <section>
            <Container>

            </Container>
        </section>
   
    </Helmet>
}

export default Cart;

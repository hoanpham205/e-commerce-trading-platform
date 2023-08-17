import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/cart.css';

import tdImg from '../assets/img/arm-chair-01.jpg'

const Cart = () => {
    return <Helmet title='Cart'>
        <CommonSection title='Shopping Cart'/>
        <section>
            <Container>
                <Row>
                    <Col lg='9'>
                        <table className='table bordered'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>

                        <tbody>
                            <tr>
                                <th><img src={tdImg} alt="" /></th>
                                <th>$222</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tbody>
                        </table>
                    </Col>
                    <Col lg='3'></Col>
                </Row>
            </Container>
        </section>
   
    </Helmet>
}

export default Cart;

import React from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/checkout.css';
import { UseSelector } from 'react-redux';


const Checkout = () => {
    const totalQuantity = useS

    return <Helmet title ='Checkout'>
        <CommonSection title='Checkout'/>
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <h6 className="mb-4 fw-bold">Billing Information</h6>
                        <Form>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Enter your name: ' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email: ' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="number" placeholder='Phone number: ' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Street address ' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='City ' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Postal code ' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="text" placeholder='Country ' />
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col lg='4'>
                        <div className="checkout__cart">
                            <h6>Total Quantity: <span>0</span> </h6>
                            <h6>Subtotal: <span>$111</span> </h6>
                            <h6>Shipping: <br />Free shipping <span>$1</span> </h6>                          
                            <h4>Total Cost: <span>$111</span></h4>
                            <button className="buy__btn auth__btn w-100">Place an order</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Checkout;

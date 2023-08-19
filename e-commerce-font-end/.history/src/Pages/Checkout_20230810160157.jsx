import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const Checkout = () => {
    return <Helmet title ='Checkout'>
        <CommonSection title='Checkout'/>
        <section>
            <Container>
                <Row>
                    <Col lg='8'>
                        <h6 className="mb-4 fw-bold">Billing Information</h6>
                        <Form>
                            <FormGroup></FormGroup>
                        </Form>
                    </Col>
                    <Col lg='4'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Checkout;

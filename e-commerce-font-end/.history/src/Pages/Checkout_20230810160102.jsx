import React from 'react';
import { Container,Row,Col,Form,FormGroup } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const Checkout = () => {
    return <Helmet title ='Checkout'>
        <CommonSection title='Checkout'/>
        <section>
            <Container>
                <Row>
                    <Col lg='8'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Checkout;

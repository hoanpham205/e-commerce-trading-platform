import React from 'react';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container,Row,Col } from 'react-bootstrap';

const Shop = () => {
    return <Helmet title='shop'>
        <CommonSection title='Products' />
        <section>
            <Container>
                <Row>
                    <Col lg='3' md=></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
        
}

export default Shop;

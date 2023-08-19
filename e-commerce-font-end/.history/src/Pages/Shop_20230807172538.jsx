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
                    <Col lg='3' md='3'>
                        <div className="filter__widget">
                            <select>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Watch</option>
                                <option value="watch">Watch</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'></Col>
                    <Col lg='6' md='6'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
        
}

export default Shop;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const Shop = () => {
    return <Helmet title='shop'>
        <CommonSection title='Products' />
        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                        <div className="filter__widget">
                            <select>
                                <option>Filter by Category</option>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Watch</option>
                                <option value="wireless">Wireless</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                            <select>
                                <option>Sort by</option>
                                <option value="Ascending">Ascending</option>
                                <option value="mobile">Mobile</option>                               
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'></Col>
                </Row>
            </Container>
        </section>
    </Helmet>
        
}

export default Shop;

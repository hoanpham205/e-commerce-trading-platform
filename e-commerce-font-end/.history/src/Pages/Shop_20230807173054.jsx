import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/'

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
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>                               
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="search__box">
                            <input type="text" placeholder='Search...' />
                            <span><i class="ri-search-2-line"></i></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
        
}

export default Shop;

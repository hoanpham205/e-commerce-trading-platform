import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ''
const Services = () => {
    return <section className="services">
        <Container>
            <Row>
                <Col lg-about='3' md='4'>
                    <div className="service__item">
                        <span><i class="ri-truck-line"></i></span>
                        <div>
                            <h3>Free Shipping</h3>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Services;

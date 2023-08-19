import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion} from 'framer-motion';
const Services = () => {
    return <section className="services">
        <Container>
            <Row>
                <Col lg-about='3' md='4'>
                    <div className="service__item"></div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Services;

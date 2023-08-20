import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './services.css'
import serviceData from '../assets/data/serviceData.js';
const Services = () => {
    return <section className="services">
        <Container>
            <Row>
            {
                serviceData.map((item,index)=>(

                ))
            }
                
            </Row>
        </Container>
    </section>
}

export default Services;

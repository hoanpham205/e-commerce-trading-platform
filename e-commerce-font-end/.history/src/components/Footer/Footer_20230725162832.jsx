import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import './footer.css';
const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4'></Col>
                <Col lg='3'></Col>
                <Col lg='2'></Col>
                <Col lg='3'></Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;

import React from 'react';
import { Col, Container, Row,List } from "react-bootstrap";
import './footer.css';
import logo from '../../assets/img/github-logo.png'
const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                    <div>
                        <h1>HT Store</h1> 
                    </div>
                    <p className="footer__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda veniam ipsam, quas quae at nesciunt rerum praesentium voluptate autem aliquam?</p>
                </div>
                </Col>
                <Col lg='3'></Col>
                <Col lg='2'></Col>
                <Col lg='3'></Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;

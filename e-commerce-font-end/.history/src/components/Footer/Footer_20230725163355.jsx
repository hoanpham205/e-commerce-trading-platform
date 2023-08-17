import React from 'react';
import { Col, Container, Row,ListGroup,ListGroupItem } from "react-bootstrap";
import { Link } from 'react-router-dom';
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
                <Col lg='3'>
                    <div className="footer__quick-links">
                        <h3 className="quick__links-title">Top Categories</h3>
                        <ListGroup className='mb-3'>
                            <ListGroupItem className=''>
                                <Link></Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='2'></Col>
                <Col lg='3'></Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;

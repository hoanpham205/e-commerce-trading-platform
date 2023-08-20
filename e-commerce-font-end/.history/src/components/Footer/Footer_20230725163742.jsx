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
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Mobile Phones</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Modern Sofa</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Arm Chair</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Smart Watches</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='2'>
                <div className="footer__quick-links">
                        <h3 className="quick__links-title">Useful Links</h3>
                        <ListGroup className='mb-3'>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='/shop'>Shop</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Modern Sofa</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Arm Chair</Link>
                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0'>
                                <Link to='#'>Smart Watches</Link>
                            </ListGroupItem>
                        </ListGroup>
                    </div>
                </Col>
                <Col lg='3'></Col>
            </Row>
        </Container>
    </footer>
}

export default Footer;

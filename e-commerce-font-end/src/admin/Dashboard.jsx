import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../styles/dashboard.css'

const Dashboard = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col className='lg-3'>
                            <div className="revenue__box">
                                <h5>Total Sales</h5>
                                <span>$12123</span>
                            </div>
                        </Col>
                        <Col className='lg-3'>
                            <div className="orders__box">
                                <h5>Orders </h5>
                                <span>999</span>
                            </div>
                        </Col>
                        <Col className='lg-3'>
                            <div className="products__box">
                                <h5>Products</h5>
                                <span>9999</span>
                            </div>
                        </Col>
                        <Col className='lg-3'>
                            <div className="users__box">
                                <h5>Users</h5>
                                <span>3242</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Dashboard;

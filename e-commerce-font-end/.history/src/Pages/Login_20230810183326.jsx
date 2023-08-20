import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
const Login = () => {
    return <Helmet title = 'Login'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3>Login</h3>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Login;

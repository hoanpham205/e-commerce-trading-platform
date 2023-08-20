import React from 'react';
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
const Login = () => {
    return <Helmet title = 'Login'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold fs-4'>Login</h3>
                        <Form className='auth__form'>
                            <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email...' />
                            </FormGroup>
                            <FormGroup className='form__group'>
                                <input type="email" placeholder='Enter your email...' />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Login;

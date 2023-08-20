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
                            <FormGroup className='auth__group'>
                                
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}

export default Login;

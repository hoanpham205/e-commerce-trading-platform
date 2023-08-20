import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

function Admin() {
  return <Helmet title='Admin'>
  <section>
    <Container>
        <Row>
            <Col></Col>
        </Row>
    </Container>
  </section>

  </Helmet>
}

export default Admin
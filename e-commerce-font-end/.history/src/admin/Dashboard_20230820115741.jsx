import React from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";


function Dashboard() {
  return <Container>
    <Row>
        <Col lg='4'>
            <ul></ul>
            <ul></ul>
            <ul></ul>
        </Col>
        <Col lg='8'></Col>
    </Row>
  </Container>
}

export default Dashboard;

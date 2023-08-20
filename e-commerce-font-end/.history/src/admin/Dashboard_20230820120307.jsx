import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <Container>
      <Row>
        <Col lg="4">
          <ListGroup>
            <ListGroup.Item>Home</ListGroup.Item>
            <ListGroup.Item>Product</ListGroup.Item>
            <ListGroup.Item>Users</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg="8">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;

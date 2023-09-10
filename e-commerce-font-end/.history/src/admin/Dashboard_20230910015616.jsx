import React from "react";
import { Col, Container, ListGroup, Nav, Row, Tab } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import products from "../assets/data/products";

function Dashboard() {
  return (
    <Container>
      <Tab.Container defaultActiveKey='products'>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey={products}>Add Products</Nav.Link>
            </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey=></Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Dashboard;

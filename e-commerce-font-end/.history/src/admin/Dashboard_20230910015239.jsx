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
              <Nav.Link eventKey={products}></Nav.Link>
            </Nav.Item>

            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Dashboard;

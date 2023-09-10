import React from "react";
import { Col, Container, ListGroup, Row, Tab } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <Container>
      <Tab.Container defaultActiveKey='products'>
        <Row>
          <Col sm={3}>
            
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Dashboard;

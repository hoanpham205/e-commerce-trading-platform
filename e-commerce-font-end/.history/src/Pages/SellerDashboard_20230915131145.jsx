import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
// Đảm bảo import AdminSidebar từ đúng đường dẫn

const SellerDashboard = () => {
  const [filterValue, setFilterValue] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [productsData, setProductsData] = useState([]);

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    setFilterValue(selectedValue);
  };

  const handleSort = (e) => {
    const selectedValue = e.target.value;
    setSortValue(selectedValue);
  };

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchValue(searchInput);
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <Row>
        <Col lg="4">
          <ListGroup>
          <NavLink to="my-shop" className={"text-black"}>
              <ListGroup.Item>Home</ListGroup.Item>
            </NavLink>
            <NavLink to="add" className={"text-black"}>
              <ListGroup.Item>Add Product</ListGroup.Item>
            </NavLink>
            <ListGroup.Item>Users</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg="8">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default SellerDashboard;

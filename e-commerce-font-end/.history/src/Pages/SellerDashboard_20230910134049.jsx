import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
 // Đảm bảo import AdminSidebar từ đúng đường dẫn

const SellerDashboard = () => {
  const [filterValue, setFilterValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [productsData, setProductsData] = useState([]); // Sử dụng state để lưu dữ liệu sản phẩm

  // Xử lý khi người dùng thay đổi giá trị lọc
  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    setFilterValue(selectedValue);
    // Thực hiện logic lọc dựa trên selectedValue
    // Cập nhật productsData sau khi lọc
  };

  // Xử lý khi người dùng thay đổi giá trị sắp xếp
  const handleSort = (e) => {
    const selectedValue = e.target.value;
    setSortValue(selectedValue);
    // Thực hiện logic sắp xếp dựa trên selectedValue
    // Cập nhật productsData sau khi sắp xếp
  };

  // Xử lý khi người dùng nhập giá trị tìm kiếm
  const handleSearch = (e) => {
    const searchInput = e.target.value;
    setSearchValue(searchInput);
    // Thực hiện logic tìm kiếm dựa trên searchInput
    // Cập nhật productsData sau khi tìm kiếm
  };

  useEffect(() => {
    // Gọi API hoặc thực hiện các tác vụ lấy dữ liệu sản phẩm ở đây
    // Sau khi lấy dữ liệu, cập nhật state productsData
  }, []); // Thêm dependencies cần thiết

  return (
    <Container>
      <Row >
        <Col lg="4">
          <ListGroup>
            <ListGroup.Item>Home</ListGroup.Item>
            <ListGroup.Item>Add Product</ListGroup.Item>
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




import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CommonSection from '../components/UI/CommonSection';
import ProductsList from '../components/UI/ProductsList'; // Đảm bảo import ProductList từ đúng đường dẫn
import AdminSidebar from './AdminSidebar'; // Đảm bảo import AdminSidebar từ đúng đường dẫn

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
    <div>
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              {/* Phần AdminSidebar ở đây */}
              <h3></h3>
            </Col>
            <Col lg="9" md="9">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i className="ri-search-2-line"></i>
                </span>
              </div>
              {productsData.length === 0 ? (
                <h1 className="text-center fs-4">No Products are found</h1>
              ) : (
                <ProductsList data={productsData} />
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SellerDashboard;




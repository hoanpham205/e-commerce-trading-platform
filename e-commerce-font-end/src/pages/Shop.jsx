import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import ProductsList from "../components/UI/ProductsList";
import axios, { endpoints } from "../configs/Apis";
import "../styles/shop.css";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]); 
  const [productsData, setProductsData] = useState([]);
  const [sortOption, setSortOption] = useState("ascending");
  

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints['products']);
        setAllProducts(response.data);
        setProductsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    let filteredProducts = [...allProducts];
    if (filterValue === "Sofa") {
       filteredProducts = productsData.filter(
        (item) => item.categoryId.name === "Sofa"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "Iphone") {
       filteredProducts = allProducts.filter(
        (item) => item.categoryId.name === "Iphone"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "chair") {
      const filteredProducts = allProducts.filter(
        (item) => item.categoryId.name === "chair"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "watch") {
      const filteredProducts = allProducts.filter(
        (item) => item.categoryId.name === "watch"
      );
      setProductsData(filteredProducts);
    }
    if (filterValue === "wireless") {
      const filteredProducts = allProducts.filter(
        (item) => item.categoryId.name === "wireless"
      );
      setProductsData(filteredProducts);
    }
    setProductsData(filteredProducts);
  };
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = allProducts.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };
  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    let sortedProducts = [...allProducts];
    if (sortValue === "ascending") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "descending") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProductsData(sortedProducts);

  };

  return (
    <Helmet title="shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleFilter}>
                  <option>Filter by Category</option>
                  <option value="Sofa">Sofa</option>
                  <option value="Iphone">Iphone</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="3">
              <div className="filter__widget">
                <select onChange={handleSort}>
                  <option>Sort by</option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <i class="ri-search-2-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="pt-0">
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No Products are found</h1>
            ) : (
              <ProductsList data={productsData} shouldShowPagination={true}/>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;

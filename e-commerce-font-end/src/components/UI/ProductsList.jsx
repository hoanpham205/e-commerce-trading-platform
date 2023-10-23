import { Pagination } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { endpoints } from "../../configs/Apis";
import ProductCard from "./ProductCard";

const ProductsList = ({ data, pageSize, shouldShowPagination }) => {
  const [totalPage, setTotalPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataShow, setDataShow] = useState([]);
  const {p} = useParams();

  const fetchData = async (page) => {
    try {
      const response = await axios.get(endpoints.page(page));
      const { listProduct, totalPage } = response.data;

      setTotalItems(totalPage * listProduct.length);
      setTotalPage(totalPage);
      setDataShow(listProduct);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage); // Fetch data for page 2.
  }, [p, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchData(page);
  };


  return (
    <>
      {dataShow?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
      {shouldShowPagination && (
        <div className="d-flex justify-content-center">
          <Pagination
            className="d-flex align-items-center"
            responsive={true}
            pageSize={dataShow.length}
            total={totalItems}
            current={currentPage}
            onChange={(page, pageSize) => handlePageChange(page)}           
          />
        </div>
      )}
    </>
  );
};

export default ProductsList;

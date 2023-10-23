import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../configs/Apis";
import {
  productCreateFail,
  productCreateSuccess
} from "../redux/slices/product";

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // Lưu URL của hình ảnh đã chọn
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector((state) => state.product);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !price || !category || !selectedImage) {
      return alert("Please fill out all the fields");
    }

    const formData = new FormData();
    formData.append("productName", name);
    formData.append("price", price);
    formData.append("categories", category);
    formData.append("image", selectedImage); // Đưa hình ảnh vào FormData

    // Gọi API để tạo sản phẩm
    axios
      .post(endpoints['add-products'], formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const data = response.data;
        // Dispatch action khi tạo sản phẩm thành công
        dispatch(productCreateSuccess(data));

        // Chuyển hướng sau khi tạo sản phẩm thành công
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      })
      .catch((error) => {
        const errorMessage =
          error.message || "An error occurred while creating the product.";
        // Dispatch action khi tạo sản phẩm thất bại
        dispatch(productCreateFail(errorMessage));
      });
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5 ">Add Product</h4>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="form__group">
                <span>Product Name</span>
                <input
                  type="text"
                  placeholder="Enter name product"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form__group w-50">
                  <span>Price</span>
                  <input
                    type="number"
                    placeholder="$..."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="form__group w-50">
                  <span>Category</span>
                  <select
                    className="w-100 p-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="chair">Chair</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </FormGroup>
              </div>
              <div>
                <FormGroup className="form__group">
                  <span>Product Image</span>
                  < type="file"
                  >
                    
                </FormGroup>
              </div>
              <button className="buy__btn" type="submit">
                Add
              </button>
            </Form>
            {isLoading && <p>Creating product...</p>}
            {isError && <p>Error: {error}</p>}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AddProduct;

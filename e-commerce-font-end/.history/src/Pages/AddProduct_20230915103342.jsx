import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  productCreateFail,
  productCreateSuccess
} from "../redux/slices/product"; // Thay thế "yourProductSliceFile" bằng đường dẫn đến tệp slice của sản phẩm của bạn.

function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imgToRemove, setImgToRemove] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector((state) => state.product);
  const []

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !price || !category || !images.length) {
      return alert("Please fill out all the fields");
    }

    // Gọi API để tạo sản phẩm
    axios
      .post("/api/product", {
        productName: name,
        price,
        categories: category,
        images,
      })
      .then((response) => {
        const data = response.data;
        // Dispatch action khi tạo sản phẩm thành công
        dispatch(productCreateSuccess(data));

        // Chuyển hướng sau khi tạo sản phẩm thành công
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        const errorMessage =
          error.message || "An error occurred while creating the product.";
        // Dispatch action khi tạo sản phẩm thất bại
        dispatch(productCreateFail(errorMessage));
      });
  }

  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "learn-code-10",
        uploadPreset: "dcizdwph",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    widget.open();
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
                  <input type="file" />
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

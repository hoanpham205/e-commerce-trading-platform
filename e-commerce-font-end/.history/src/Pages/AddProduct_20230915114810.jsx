
import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios, { endpoints } from "../configs/Apis";
import { cookie } from "react-cookie";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  
  // Lưu URL của hình ảnh đã chọn
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // // Kiểm tra xem các trường cần thiết đã được điền đầy đủ hay chưa
    // if (!name || !price || !category || !selectedImage) {
    //   return alert("Please fill out all the fields");
    // }

    const formData = new FormData();
    formData.append("productName", name);
    formData.append("price", price);
    formData.append("categories", category);
    formData.append("file", file); // Đưa hình ảnh vào FormData

    // Gọi API để tạo sản phẩm
      await axios ({
      url: endpoints['add-products'],
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data",
      Authorization: cookie.load('token'), },
    });

  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Product</h4>
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
                  <input
                    type="file"
                    onChange={handleFileChange}
                  />
                </FormGroup>
              </div>
              <button
                    type="submit"
                    className="buy__btn auth__btn"
                    onClick={handleSubmit}> Save
                  </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AddProduct;

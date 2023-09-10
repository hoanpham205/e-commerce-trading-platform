import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [imgToRemove, setImgToRemove] = useState(null);
    const navigate = useNavigate();
    const [createProduct, { isError, error, isLoading, isSuccess }] = useCreateProductMutation();
  function handleRemoveImg(imgObj) {
    setImgToRemove(imgObj.public_id);
    axios
        .delete(`/images/${imgObj.public_id}/`)
        .then((res) => {
            setImgToRemove(null);
            setImages((prev) => prev.filter((img) => img.public_id !== imgObj.public_id));
        })
        .catch((e) => console.log(e));
}

function handleSubmit(e) {
    e.preventDefault();
    if (!name || !description || !price || !category || !images.length) {
        return alert("Please fill out all the fields");
    }
    createProduct({ name, description, price, category, images }).then(({ data }) => {
        if (data.length > 0) {
            setTimeout(() => {
                navigate("/");
            }, 1500);
        }
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
                setImages((prev) => [...prev, { url: result.info.url, public_id: result.info.public_id }]);
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
            <Form>
              <FormGroup className="form__group">
                <span>Product Title</span>
                <input type="text" placeholder="Double sofa" />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Short Description</span>
                <input type="text" placeholder="lorem..." />
              </FormGroup>
              <FormGroup className="form__group">
                <span>Description</span>
                <input type="text" placeholder="Description..." />
              </FormGroup>
              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form__group w-50">
                  <span>Price</span>
                  <input type="number" placeholder="$..." />
                </FormGroup>
                <FormGroup className="form__group w-50">
                  <span>Category</span>
                  <select className="w-100 p-2">
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
              <button className=" buy__btn ">Add</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AddProduct;

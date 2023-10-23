import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { ProgressBar } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "../Helmet/Helmet";
import { endpoints } from "../../configs/Apis";
//import "../style/login.css";

const ShopCreate = () => {
  const [shopname, setShopname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Lấy token từ local storage sau khi người dùng đăng nhập
    const token = cookie.load("token");
    if (!token) {
      toast.error("Please log in to create a store.");
      setLoading(false);
      return;
    }
    const shopData = {
      storeName: shopname,
      description: address,
    };
    try {
      const response = await axios.post(
        endpoints['create-store'],
        shopData,
        {
          headers: {
            Authorization: cookie.load("token"),
          },
        }
      );
      if (response.status === 200) {
        toast.success("Create Shop Success.");
        navigate("/shop-login");
      } else {
        toast.error("Can not create shop.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      toast.error("Error not create shop.");

      // Xử lý lỗi ở đây, ví dụ hiển thị thông báo lỗi cho người dùng
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <ProgressBar
                  height="80"
                  width="80"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#F4442E"
                  barColor="#51E5FF"
                />
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="fw-bold mb-4"> Register as a seller</h3>
                <Form className="auth__form" onSubmit={handleSubmit}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Shop Name"
                      value={shopname}
                      onChange={(e) => setShopname(e.target.value)}
                    />
                  </FormGroup>

                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your address ..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormGroup>

                  <button
                    type="submit"
                    className="buy__btn auth__btn"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>

                  <p>
                    Already have account? <Link to="/">Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ShopCreate;

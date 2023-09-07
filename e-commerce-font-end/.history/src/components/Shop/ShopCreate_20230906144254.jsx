import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { ProgressBar } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../Helmet/Helmet";
import { toast } from "react-toastify";
//import "../style/login.css";

const ShopCreate = () => {
  const [shopname, setShopname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState('');
  
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   let body = new FormData();
  //   body.append("shopname", shopname);
  //   body.append("address", address);
  //   const res = await axios({
  //     url: "http://localhost:8080/trading-platform/api/store/",
  //     method: "POST",
  //     data: body,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   });
  //   navigate("home");
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Lấy token từ local storage sau khi người dùng đăng nhập
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.error("Vui lòng đăng nhập để tạo cửa hàng.");
      setLoading(false);
      return;
    }
    const shopData = {
      storeName: shopname,
      description: address,
    }
    try {
      const response = await axios.post(
        "http://localhost:8080/trading-platform/api/store/", shopData,{
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          toast.success("Cửa hàng đã được tạo thành công.");
        navigate("home");
        } else {
          toast.error("Có lỗi xảy ra khi tạo cửa hàng.");
        }

      console.log("succsess", response.data); // Hiển thị response từ máy chủ (kiểm tra xem có phản hồi không)

      navigate("home");
    } catch (error) {
      console.error("Error sending request:", error);

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
                  {/* <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter your password..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="number"
                      placeholder="Enter your number phone..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </FormGroup> */}
                  <FormGroup className='form__group'>
                    <input type="text"  placeholder="Enter your address ..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}/>
                  </FormGroup>
                  {/* <FormGroup className="form__group">
                    <input type="file" onChange={handleFileChange} />
                  </FormGroup> */}
                  {/* <FormGroup className='form__group'>
                              <select value={role} onChange={(e) => setRole(e.target.value)}>
                                  <option value="individual">Individual User</option>
                                  <option value="seller">Merchant/Business</option>
                              </select>
                            </FormGroup> */}
                  <button
                    type="submit"
                    className="buy__btn auth__btn"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Loading..." : "Submit"}
                  </button>
                  {/* <button type='submit' className="buy__btn auth__btn">Submit</button> */}
                  <p>
                    Already have account? <Link to="/shop-login">Login</Link>
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
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/cart.css";
import axios from "../configs/Apis";


const Cart = () => {

  const handlePayment = async () => {
    try {
  
      // Tạo một đối tượng chứa thông tin thanh toán
      const paymentInfo = {
        products: cartItems, // Danh sách sản phẩm trong giỏ hàng
        totalAmount: totalAmount, // Tổng số tiền cần thanh toán
        // Các thông tin khác cần thiết
      };
  
      // Gọi API thanh toán
      const response = await axios.post(", paymentInfo);
  
      // Xử lý kết quả từ máy chủ (nếu cần)
      const data = response.data;
      console.log("Payment Result:", data);
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2>No item added to the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ),)}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  Subtotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy__btn w-100" onClick={handlePayment}>
                  PayMent
                </button>
                <PayPalScriptProvider options={{ clientId: "test" }}>
                  <PayPalButtons className="mt-2" style={{}} />
                </PayPalScriptProvider>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping </Link>{" "}
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imageUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
          class="ri-delete-bin-6-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default Cart;

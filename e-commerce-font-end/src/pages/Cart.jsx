import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios, { endpoints } from "../configs/Apis";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [productName, setProductName] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [voucherCode, setVoucherCode] = useState("");
  const [subtotal, setSubtotal] = useState(totalAmount);
  const [voucherMessage, setVoucherMessage] = useState("");

  const handleApplyVoucher = async () => {
    try {
      const response = await axios.get(endpoints.voucher(voucherCode), {
        code: voucherCode,
      });
      const voucher = response.data;

      if (voucher) {
        const discountPercentage = voucher.discount;
        const discountAmount = totalAmount * discountPercentage;
        const newSubtotal = totalAmount - discountAmount;
        dispatch(cartActions.applyDiscount(discountAmount));
        setSubtotal(newSubtotal);
        setVoucherMessage("Áp dụng mã voucher thành công!");
      } else {
        setVoucherMessage("Mã voucher không hợp lệ");

        setSubtotal(totalAmount);
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra mã voucher:", error);
    }
  };
  const createOrder = (data, actions) => {
    console.log("data: ", data);
    return actions.order
      .create({
        purchase_units: [
          {
            description: productName,
            amount: {
              currency_code: "USD",
              value: totalAmount,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  const onApprove = (data, actions) => {
    console.log("data: ", data);
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [success]);

  const handlePayment = async () => {
    try {
      const paymentData = {
        carts: cartItems.map((item) => ({
          id: item.id,
          count: item.quantity,
          price: item.price,
        })),
        payment: {
          id: 2,
          payment: "Tiền mặt",
        },
        voucher:1,
        total:subtotal
      };

      const response = await axios.post(endpoints["payment"], paymentData, {
        headers: {
          Authorization: cookie.load("token"),
        },
      });
      const data = response.data;
      dispatch(cartActions.resetTotalQuantity());
      navigate("/");
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };

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
                    ))}
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
                <input
                  type="text"
                  className="form-control m-1"
                  placeholder="Nhập mã voucher"
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                />
                <button
                  className="voucher__btn w-20 "
                  onClick={handleApplyVoucher}
                >
                  Apply
                </button>
                <h5 className="d-flex align-items-center justify-content-between mt-3">
                  New Subtotal
                  <span className="fs-4 fw-bold">${subtotal.toFixed(2)}</span>
                </h5>
              </div>
              <div>
                <button className="buy__btn w-100" onClick={handlePayment}>
                  PayMent
                </button>
                <PayPalScriptProvider
                  options={{
                    clientId:
                      "AQ9yLHB6AUNt4bxdgZwEatf-J6QppNS4DQxBlZ9UETqI7M0Lf5AQuXVO8C6IvoLNW6jxKuBZqIUx_mX4",
                  }}
                >
                  <PayPalButtons
                    style={{ layout: "vertical" }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                  />
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
  const incrementQuantity = () => {
    dispatch(cartActions.incrementQuantity(item.id));
  };
  const decrementQuantity = () => {
    dispatch(cartActions.decrementQuantity(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.productImage} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>
        <button className="btn-amount" onClick={incrementQuantity}>
          <i class="ri-arrow-drop-up-line"></i>
        </button>
        {item.quantity}
        <button className="btn-amount" onClick={decrementQuantity}>
          <i class="ri-arrow-drop-down-line"></i>
        </button>
      </td>
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

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios, { endpoints } from "../configs/Apis";
import "../styles/checkout.css";

const Checkout = (props) => {
  const {product} = props;
  const [productsData,setProductsData] = useState([])
  const [id,setId] = useState("")
  const [productName,setProductName] = useState("")
  const [price,setPrice] = useState("")
  const [count,setCount] = useState("")
  const [paidFor,setPaidFor] = useState(false)
  const [error,setError] = useState(null)

  const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);

    // creates a paypal order
    const createOrder = (data, actions) => {
      console.log('data: ' , data);
        return actions.order.create({
            purchase_units: [
                {
                    description: productName,
                    amount: {
                        currency_code: "USD",
                        value: 20,
                    },
                },
            ],
        }).then((orderID) => {
                setOrderID(orderID);
                return orderID;
            });
    };

    // check Approval
    const onApprove = (data, actions) => {
      console.log('data: ' , data);
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
            console.log('Order successful . Your order id is--', orderID);
        }
    },[success]);
  
  // const handleApprove= (orderID) =>{
    
  //   setPaidFor(true);
  // };
  if(paidFor) {
    alert('Thank you for your purchase')
  }
  if(error) {
    alert(error)
  }

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints['payment']);
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };   
    loadProducts();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let body = new FormData();
    body.append("productId", id);
    body.append("name", productName);
    body.append("price", price);
    body.append("count", count);
    const res = await axios({
      url: endpoints['payments'],
      method: "POST",
      data: body,
      headers: { "Content-Type": "multipart/form-data" },
    });
    
  };
  const handleClick = () => {
    console.log('click');
  }


  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="checkout__cart">
                <h6>
                  Total Quantity: <span>{totalQuantity} items</span>{" "}
                </h6>
                <h6>
                  Subtotal: <span>${totalAmount}</span>{" "}
                </h6>
                <h6>
                  Shipping: <br />
                  Free shipping <span>$1</span>{" "}
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <h6>Voucher: 
                  <input type="text" placeholder="Enter your voucher" />
                </h6>
                <button className="buy__btn auth__btn w-100" onClick={handleSubmit}>
                  <Link to="/home">Submit</Link>
                </button>
                ádasdas
                <PayPalScriptProvider options={{ clientId: "AQ9yLHB6AUNt4bxdgZwEatf-J6QppNS4DQxBlZ9UETqI7M0Lf5AQuXVO8C6IvoLNW6jxKuBZqIUx_mX4" }}>
                  {/* <PayPalButtons onClick={(data,actions)=>{
                    const hasAlreadyBoughtCourse = false;
                    if(hasAlreadyBoughtCourse) {
                      setError('You already bought this course. Please go to your account to view this course');
                      return actions.reject();
                    }else {
                      return actions.resolve();
                    }
                  }} className="mt-2" style={{ tagline: false, shape: 'pill'}} createOrder={(data,actions) =>{
                    return actions.order.create( {
                      purchase_units: [
                        {
                          description: product.description,
                          amount:{
                          value: 20,
                          currency_code: 'USD'
                          
                        }
                        }
                      ]
                    })
                  }}
                    onApprove={async (data,actions) =>{
                      const order = await actions.order.capture();
                      console.log('order: ' , order);
                      handleApprove(data.orderID);
                    }}
                    onError={(error) =>{
                      setError(error)
                      console.log('Paypal checkout onError ' , error)
                    }}
                    onCancel={()=>{
                      
                    }}
                  /> */}
                  <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onClick={handleClick}
                        onApprove={onApprove}
                    />
                </PayPalScriptProvider>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;

import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Payment() {

  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountPrice, setDiscountPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>Payment</div>
  )
}

export default Payment
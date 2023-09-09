import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


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
  const paymentSubmit = () => {
    if(address1 === "" || address2 === "" || country === "" || city === ""){
       toast.error("Please choose your delivery address!")
    } else{
     const shippingAddress = {
       address1,
       address2,
     
       country,
       city,
     };
 
     const orderData = {
       cart,
       
       subTotalPrice,
       shipping,
       discountPrice,
       shippingAddress,
       user,
     }
 
     // update local storage with the updated orders array
     localStorage.setItem("latestOrder", JSON.stringify(orderData));
     navigate("/payment");
    }
   };
 
   const subTotalPrice = cart.reduce(
     (acc, item) => acc + item.qty * item.discountPrice,
     0
   );
 
   // this is shipping cost variable
   const shipping = subTotalPrice * 0.1;
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     

  return (
    <div>Payment</div>
  )
  }
}
export default Payment;
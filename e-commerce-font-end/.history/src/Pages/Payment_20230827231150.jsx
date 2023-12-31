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
    if(address1 === "" || address2 === "" || zipCode === null || country === "" || city === ""){
       toast.error("Please choose your delivery address!")
    } else{
     const shippingAddress = {
       address1,
       address2,
       zipCode,
       country,
       city,
     };
 
     const orderData = {
       cart,
       totalPrice,
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
     const name = couponCode;
 
     await axios.get(`${server}/coupon/get-coupon-value/${name}`).then((res) => {
       const shopId = res.data.couponCode?.shopId;
       const couponCodeValue = res.data.couponCode?.value;
       if (res.data.couponCode !== null) {
         const isCouponValid =
           cart && cart.filter((item) => item.shopId === shopId);
 
         if (isCouponValid.length === 0) {
           toast.error("Coupon code is not valid for this shop");
           setCouponCode("");
         } else {
           const eligiblePrice = isCouponValid.reduce(
             (acc, item) => acc + item.qty * item.discountPrice,
             0
           );
           const discountPrice = (eligiblePrice * couponCodeValue) / 100;
           setDiscountPrice(discountPrice);
           
           setCouponCode("");
         }
       }
       if (res.data.couponCode === null) {
         toast.error("Coupon code doesn't exists!");
         setCouponCode("");
       }
     });
   };
 
   const discountPercentenge = couponCodeData ? discountPrice : "";
 
   const totalPrice = couponCodeData
     ? (subTotalPrice + shipping - discountPercentenge).toFixed(2)
     : (subTotalPrice + shipping).toFixed(2);
 
   console.log(discountPercentenge);

  return (
    <div>Payment</div>
  )
}

export default Payment
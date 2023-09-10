import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios, { authApi, endpoints } from "../configs/Apis";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/product-details.css";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [sortOption, setSortOption] = useState("ascending");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints['products']);
        const products = response.data;
        const productFind = products.find(product => product.id === id)
        setProduct(productFind);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);
  // const relatedProducts = products.filter((item) => item.categoriesCategoryId.categoryName === productsData.categoriesCategoryId.categoryName);
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserMsg = reviewMsg.current.value;
    const reviewObj = {
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review submitted successfully");
  };
const handleSubRare=() => {
  const process=async()=>{
    try{
      let {data} = await authApi().post(endpoints[`comment`]);

    }catch(ex){
      console.error(ex);
    }
  }
}

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: product.imageUrl,
        productName: product.productName,
        price: product.price,
      })
    );
    toast.success("Product added successfully");
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [product]);

  useEffect(()=>{
    const loadComment=()=>{

    }
  }
  )

  return (
   {product && }
    
  );
};

export default ProductDetails;

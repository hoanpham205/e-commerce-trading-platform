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
        const productFind = products.filter(product => product.productId === id)
        console.log(products);
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
    <>
   { product && <Helmet title={product.productName}>
   <CommonSection title={product.productName} />
   <section>
     <Container>
       <Row>
         <Col lg="6">
           <img src={product.imageUrl} alt="" />
         </Col>
         <Col lg="6">
           <div className="product__details">
             <h2>{product.productName}</h2>
             <div className="product__rating d-flex align-items-center gap-5 mb-3">
               <div>
                 <span>
                   <i class="ri-star-s-fill"></i>
                 </span>
                 <span>
                   <i class="ri-star-s-fill"></i>
                 </span>
                 <span>
                   <i class="ri-star-s-fill"></i>
                 </span>
                 <span>
                   <i class="ri-star-s-fill"></i>
                 </span>
                 <span>
                   <i class="ri-star-half-s-line"></i>
                 </span>
               </div>
               <p>({product.avgRating}ratings)</p>
             </div>
             <div className="d-flex align-items-center gap-5 mb-3">
               <span className="product__price">${product.price}</span>
               <span>Category: {product.category.toUpperCase()}</span>
             </div>
             <p>{product.shortDesc}</p>
             <motion.button
               whileTap={{ scale: 1.2 }}
               className="buy__btn"
               onClick={addToCart}
             >
               Add to Cart
             </motion.button>
           </div>
         </Col>
       </Row>
     </Container>
   </section>

   <section>
     <Container>
       <Row>
         <Col lg="12">
           <div className="tab__wrapper d-flex align-items-center gap-5">
             <h6
               className={`${tab === "desc" ? "active__tab" : ""}`}
               onClick={() => setTab("desc")}
             >
               Description
             </h6>
             <h6
               className={`${tab === "rev" ? "active__tab" : ""}`}
               onClick={() => setTab("rev")}
             >
               Reviews ({product.reviews.length})
             </h6>
           </div>
           {tab === "desc" ? (
             <div className="tab__content mt-5">
               <p>{product.description}</p>
             </div>
           ) : (
             <div className="product__review mt-5">
               <div className="review__wrapper">
                 <ul>
                   {product.reviews?.map((item, index) => (
                     <li key={index} className="mb-4">
                       <h6>Phi Hoan Dep Trai</h6>
                       <span>{item.rating}( rating)</span>
                       <p>{item.text}</p>
                     </li>
                   ))}
                 </ul>
                 <div className="review__form">
                   <h4>Leave your experience</h4>
                   <form action="" onSubmit={submitHandler}>
                     {/* <div className="form__group">
                       <input
                         type="text"
                         placeholder="Enter name... "
                         ref={reviewUser}
                       />
                     </div> */}

                     <div className="form__group d-flex align-items-center gap-5">
                       <motion.span
                         whileTap={{ scale: 1.2 }}
                         onClick={() => setRating(1)}
                       >
                         1 <i class="ri-star-s-fill"></i>
                       </motion.span>
                       <motion.span
                         whileTap={{ scale: 1.2 }}
                         onClick={() => setRating(2)}
                       >
                         2 <i class="ri-star-s-fill"></i>
                       </motion.span>
                       <motion.span
                         whileTap={{ scale: 1.2 }}
                         onClick={() => setRating(3)}
                       >
                         3 <i class="ri-star-s-fill"></i>
                       </motion.span>
                       <motion.span
                         whileTap={{ scale: 1.2 }}
                         onClick={() => setRating(4)}
                       >
                         4 <i class="ri-star-s-fill"></i>
                       </motion.span>
                       <motion.span
                         whileTap={{ scale: 1.2 }}
                         onClick={() => setRating(5)}
                       >
                         5 <i class="ri-star-s-fill"></i>
                       </motion.span>
                     </div>

                     <div className="form__group">
                       <textarea
                         ref={reviewMsg}
                         rows={4}
                         type="text"
                         placeholder="Review message... "
                       />
                     </div>
                     <motion.button
                       whileTap={{ scale: 1.2 }}
                       type="submit"
                       onClick={handleSubRare}
                       className="buy__btn"
                     >
                       Submit
                     </motion.button>
                   </form>
                 </div>
               </div>
             </div>
           )}
         </Col>
         <Col lg="12" className="mt-5">
           <h2 className="related__title">You might also like</h2>
         </Col>
         {/* <ProductsList data={relatedProducts} /> */}
       </Row>
     </Container>
   </section>
 </Helmet> }
 </> 
  );
};

export default ProductDetails;

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "../components/Helmet/Helmet";
import CommentBox from "../components/UI/CommentBox";
import CommonSection from "../components/UI/CommonSection";
import axios, { authApi, endpoints } from "../configs/Apis";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/product-details.css";
import ProductsList from "../components/UI/ProductsList";

const ProductDetails = () => {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const [relatedProducts,setRelatedProducts] = useState()

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [sortOption, setSortOption] = useState("ascending");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints["products"]);
        const products = response.data;
        const productFind = products.find((p) => p.productId == id);

        setProduct(productFind);

    const filterdTrendingProducts = products.filter(
      (item) => item.categoriesCategoryId.categoryName === "chair"
    );
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
  const handleSubRare = () => {
    const process = async () => {
      try {
        let { data } = await authApi().post(endpoints[`comment`]);
      } catch (ex) {
        console.error(ex);
      }
    };
  };

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

  useEffect(() => {
    const loadComment = () => {};
  });

  return (
    <>
      {product && (
        <Helmet title={product.productName}>
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
                      <span>
                        Category:{" "}
                        {product.categoriesCategoryId.categoryName.toUpperCase()}
                      </span>
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
                      {/* Reviews ({product.length}) */}
                    </h6>
                  </div>

                  <div className="tab__content mt-5">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eligendi ab illum, hic nam alias at sit cumque animi sint
                      eum eveniet, sed nobis quae ad soluta. Sequi non animi
                      alias!
                    </p>
                  </div>

                  <div className="product__review mt-5">
                    <div>
                      <CommentBox></CommentBox>
                    </div>
                  </div>
                </Col>
                <Col lg="12" className="mt-5">
                  <h2 className="related__title">You might also like</h2>
                </Col>
                <ProductsList data={relatedProducts} />
              </Row>
            </Container>
          </section>
        </Helmet>
      )}
    </>
  );
};

export default ProductDetails;

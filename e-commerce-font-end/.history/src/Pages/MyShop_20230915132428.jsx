import { motion } from "framer-motion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/cart.css";
import { useEffect } from "react";
import axios,{ endpoints } from "../configs/Apis";
import { useState } from "react";
import ProductsList from "../components/UI/ProductsList";

const MyShop = () => {


  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [productsData, setProductsData] = useState([]);
  const [sortOption, setSortOption] = useState("ascending");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints['products']);
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
      <section>
        <Container>
          <Row>
            <Col lg="9">
               
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
                  <ProductsList data={productsData} />
                  </tbody>
                </table>
              )}
            </Col>
            
          </Row>
        </Container>
      </section>
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
        <img src={item.imgUrl} alt="" />
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

export default MyShop;
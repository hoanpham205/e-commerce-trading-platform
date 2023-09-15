import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios, { endpoints } from "../configs/Apis";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/cart.css";

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

  const handleDeleteProduct= async (e) => {
    e.preventDefault();
    await axios({
        url: endpoints["delete-product"](e.id),
        method: "DELETE",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: cookie.load("token"),
        },
      });
  }

  return (
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {productsData.length === 0 ? (
                <h2>No item on shop</h2>
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
                    {productsData.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
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

export default MyShop;
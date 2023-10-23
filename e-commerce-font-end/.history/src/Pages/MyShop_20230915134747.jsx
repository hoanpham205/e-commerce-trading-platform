import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { useDispatch, useSelector } from "react-redux";
import axios, { endpoints } from "../configs/Apis";
import { cartActions } from "../redux/slices/cartSlice";
import "../styles/cart.css";
import { useParams } from "react-router-dom";

const MyShop = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [productsData, setProductsData] = useState([]);
  const [sortOption, setSortOption] = useState("ascending");
  const { id } = useParams();

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

  const handleDeleteProduct = async (id) => {
    try {
      // Gọi API để xóa sản phẩm
      await axios({
        url: endpoints["delete-product"](id),
        method: "DELETE",
        headers: {
          Authorization: cookie.load("token"),
        },
      });

      // Sau khi xóa sản phẩm thành công, bạn có thể cập nhật danh sách sản phẩm
      // hoặc thực hiện các thao tác cần thiết tại đây.

    } catch (error) {
      console.error("Error deleting product:", error);
      // Xử lý lỗi nếu cần thiết
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="9">
            {productsData.length === 0 ? (
              <h2>No item in the shop</h2>
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
                    <Tr item={item} key={index} onDeleteProduct={handleDeleteProduct} />
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

const Tr = ({ item, onDeleteProduct }) => {
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
          onClick={() => onDeleteProduct(item.id)} // Gọi hàm xóa sản phẩm khi người dùng nhấn vào biểu tượng "Xóa"
          className="ri-delete-bin-6-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default MyShop;

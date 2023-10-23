import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios, { endpoints } from "../configs/Apis";
import "../styles/cart.css";

const MyShop = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [productsData, setProductsData] = useState([]);
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("ascending");
  const { id } = useParams();
  const postId = id || null;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints['products']);
        const products = response.data;
        const productFind = products.find((p) => p.productId == id);
        setProductsData(response.data);
        if (productFind) {
            setProduct(productFind);
            const filteredRelatedProducts = products.filter(
                (item) => item.categoriesCategoryId.categoryName === productFind.categoriesCategoryId.categoryName
            );
            setRelatedProducts(filteredRelatedProducts);
        } else {
            console.error("Product not found with ID:", id);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
    };

    loadProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    console.info("Product deleted:", productId);
    try {
      // Gọi API để xóa sản phẩm
      await axios({
        url: endpoints["delete-product"](productId),
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
                  ),)}
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
          onClick={() => onDeleteProduct(item.productId)} // Gọi hàm xóa sản phẩm khi người dùng nhấn vào biểu tượng "Xóa"
          className="ri-delete-bin-6-line"
        ></motion.i>
      </td>
    </tr>
  );
};

export default MyShop;

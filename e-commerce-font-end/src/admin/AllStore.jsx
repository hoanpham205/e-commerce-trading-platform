import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios, { endpoints } from "../configs/Apis";

const AllStore = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [userData, setUserData] = useState([]);
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const postId = id || null;
  const nav = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints["all-store"]);
        const products = response.data;
        console.log(products);
        const productFind = products.find((p) => p.id == id);
        setUserData(response.data);
        if (productFind) {
          setProduct(productFind);
          const filteredRelatedProducts = products.filter(
            (item) =>
              item.categoriesCategoryId.categoryName ===
              productFind.categoriesCategoryId.categoryName
          );
          setRelatedProducts(filteredRelatedProducts);
        } else {
          console.error("Product not found with ID:", id);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    loadProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product');
    if(confirmDelete){
        try {
          // Gọi API để xóa sản phẩm
          await axios({
            url: endpoints["delete-product"](productId),
            method: "DELETE",
            headers: {
              Authorization: cookie.load("token"),
            },
          });
          nav("/dashboard");
    
          // Sau khi xóa sản phẩm thành công, bạn có thể cập nhật danh sách sản phẩm
          // hoặc thực hiện các thao tác cần thiết tại đây.
        } catch (error) {
          console.error("Error deleting product:", error);
          // Xử lý lỗi nếu cần thiết
        }

    }
    else {
        
    }
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            {userData.length === 0 ? (
              <h2>No store in the shop</h2>
            ) : (
              <table className="table bordered">
                <thead>
                  <tr>
                    <th>Store Name</th>
                    <th>Address</th>
                    <th>Delete</th>
                    <th>Active</th>
                    <th>Revenue</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <h3 className="py-5 fw-bold text-center">Loaing...</h3>
                  ) : (
                    userData.map((item, index) => (
                    <Tr item={item} key={index} onDeleteProduct={handleDeleteProduct} />
                  ),)
                  )}
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
    const active = (
        (item.active == 1) ? <button className="btn btn-success" >Active</button> : <button className="btn btn-danger" >Pending</button>
    )
    return (
      <tr>
        <td> {item.storeName}</td>
        <td>{item.adress}</td>
        <td>
        <button className="btn btn-danger" onClick={() => onDeleteProduct(item.id)}>Delete</button>
        </td>
        <td>{active}</td>
        <td>
        <span ><i class="ri-bar-chart-2-line"></i></span>
        </td>
      </tr>
    );
  };

export default AllStore;

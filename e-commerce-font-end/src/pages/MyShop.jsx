import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import cookie from "react-cookies";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { endpoints } from "../configs/Apis";
import "../styles/cart.css";
import DrawerComponent from "./../components/Drawer/DrawerComponent";

const MyShop = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [productsData, setProductsData] = useState([]);
  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [sortOption, setSortOption] = useState("ascending");
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const postId = id || null;
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const showDrawer = () => {
    setIsOpenDrawer(true);
  };

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(endpoints["products"]);
        const products = response.data;
        const productFind = products.find((p) => p.productId === id);
        setProductsData(response.data);
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

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  // Lưu URL của hình ảnh đã chọn
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // // Kiểm tra xem các trường cần thiết đã được điền đầy đủ hay chưa
    // if (!name || !price || !category || !selectedImage) {
    //   return alert("Please fill out all the fields");
    // }

    const formData = new FormData();
    formData.append("productName", name);
    formData.append("price", price);
    formData.append("count", amount);
    formData.append("cateid", category);
    formData.append("file", file); // Đưa hình ảnh vào FormData

    console.log(cookie.load("token"));
    // Gọi API để tạo sản phẩm
    await axios({
      url: endpoints["add-products"],
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: cookie.load("token"),
      },
    });
    navigate("/");
    toast.success("Update Product Sucessfully");
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product"
    );
    if (confirmDelete) {
      try {
        // Gọi API để xóa sản phẩm
        await axios({
          url: endpoints["delete-product"](id),
          method: "DELETE",
          headers: {
            Authorization: cookie.load("token"),
          },
        });
        nav("/sellerDashboard");

        // Sau khi xóa sản phẩm thành công, bạn có thể cập nhật danh sách sản phẩm
        // hoặc thực hiện các thao tác cần thiết tại đây.
      } catch (error) {
        console.error("Error deleting product:", error);
        // Xử lý lỗi nếu cần thiết
      }
    } else {
    }
  };
  const handleEdit = (productId) => {
    const selectedProduct = productsData.find((item) => item.productId === productId);
    setProduct(selectedProduct);
    showDrawer();
  }

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
                    <th>Count</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <h3 className="py-5 fw-bold text-center">Loaing...</h3>
                  ) : (
                    productsData.map((item, index) => (
                      <Tr
                        item={item}
                        key={index}
                        onDeleteProduct={handleDeleteProduct}
                        onEdit={showDrawer}
                      />
                    ))
                  )}
                </tbody>
              </table>
            )}
          </Col>
        </Row>
      </Container>
      <DrawerComponent
        title="Chi tiết sản phẩm"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="65%"
      >
        <Form onSubmit={handleEdit}>
          <FormGroup className="form__group">
            <span>Product Name</span>
            <input
              type="text"
              placeholder="Enter name product"
              value={product ? product.productName : name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <div className="d-flex align-items-center justify-content-between gap-5">
            <FormGroup className="form__group w-50">
              <span>Price</span>
              <input
                type="number"
                placeholder="$..."
                value={product ? product.price : price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormGroup>
            <FormGroup className="form__group w-50">
              <span>Category</span>
              <select
                className="w-100 p-2"
                value={product? product.category : category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="chair">Chair</option>
                <option value="sofa">Sofa</option>
                <option value="1">Iphone</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </FormGroup>
            <FormGroup className="form__group">
              <span>Quantity </span>
              <input
                type="number"
                placeholder="Enter amount"
                value={product ? product.amount :amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup className="form__group">
              <span>Product Image</span>
              <input type="file" onChange={handleFileChange} />
            </FormGroup>
          </div>
          <button type="submit" className="buy__btn" onClick={handleSubmit}>
            {" "}
            Save
          </button>
        </Form>
      </DrawerComponent>
    </section>
  );
};

const Tr = ({ item, onDeleteProduct, onEdit }) => {
  return (
    <tr>
      <td>
        <img src={item.productImage[0]} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.categoryId.name}</td>
      <td>
        <motion.i
          whileTap={{ scale: 1.2 }}
          onClick={() => onDeleteProduct(item.id)} // Gọi hàm xóa sản phẩm khi người dùng nhấn vào biểu tượng "Xóa"
          className="ri-delete-bin-6-line"
        ></motion.i>
      </td>
      <td>
        <button className="edit" onClick={() => onEdit(item.id)}>
          <i class="ri-pencil-line"></i>
        </button>
      </td>
    </tr>
  );
};

export default MyShop;

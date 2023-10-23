import axios from "axios";
import cookie from "react-cookies";


const SERVER = "http://localhost:8080";

export const endpoints = {
  "categories": `${SERVER}/api/categories/`,
  "products": `${SERVER}/api/products/`,
  "product-store":(id) => `${SERVER}/api/product-store/${id}`,
  "add-products": `${SERVER}/api/product/`,
  "login": `${SERVER}/api/signin/`,
  "register": `${SERVER}/api/signup/`,
  "current-user": `${SERVER}/api/current-user/`,
  "voucher":(code)=> `${SERVER}/api/voucher/code/?code=${code}`,
  "create-store": `${SERVER}/api/store/`,
  "all-store": `${SERVER}/api/stores/`,
  "users": `${SERVER}/api/users/`,
  "payment": `${SERVER}/api/pay/`,
  "delete-product":(id) => `${SERVER}/api/product/${id}`,
  "comment": (id) => `${SERVER}/product/${id}/comment`,
  "page": (page) =>`${SERVER}/api/product/?page=${page}`,

};

export const authApi = () => {
  return axios.create({
    baseURL: SERVER,
    headers: {
      Authorization: cookie.load("token"),
    },
  });
};

// export const loginUser = async (user,dispatch, navigate) => {

// }

export default axios.create({
  baseURL: SERVER,
});

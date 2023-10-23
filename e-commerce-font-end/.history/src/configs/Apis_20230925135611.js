import axios from "axios";
import cookie from "react-cookies";


const SERVER = "http://localhost:8080";

export const endpoints = {
  "categories": `${SERVER}/api/categories/`,
  "products": `${SERVER}/api/products/`,
  "add-products": `${SERVER}/api/product/`,
  "login": `${SERVER}/api/signin/`,
  "register": `${SERVER}/api/signup/`,
  "current-user": `${SERVER}/api/current-user/`,
  "create-store": `${SERVER}/api/store/`,
  "payment": `${SERVER}/api/pay/`,
  "delete-product":(id) => `${SERVER}/api/product/${id}/`,
  "comment": (id) => `${SERVER}/product/${id}/comment`,
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

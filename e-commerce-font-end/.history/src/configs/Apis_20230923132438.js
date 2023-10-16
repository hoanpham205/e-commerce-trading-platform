import axios from "axios";
import cookie from "react-cookies";


const SERVER = "http://localhost:8080";

export const endpoints = {
  "categories": `${SERVER}/api/categories/`,
  "products": `${SERVER}/api/allProducts/`,
  "add-products": `${SERVER}/api/product/`,
  "login": `${SERVER}/api/signin/`,
  "register": `${SERVER}/api/signup/`,
  "current-user": `${SERVER_CONTEXT}/api/current-user/`,
  "create-store": `${SERVER_CONTEXT}/api/store/`,
  "payment": `${SERVER_CONTEXT}/api/pay/`,
  "delete-product":(id) => `${SERVER_CONTEXT}/api/product/${id}/`,
  "comment": (id) => `${SERVER_CONTEXT}/product/${id}/comment`,
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

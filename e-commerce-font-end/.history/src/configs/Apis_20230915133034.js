import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/trading-platform";
const SERVER = "http://localhost:8080";

export const endpoints = {
  "categories": `${SERVER_CONTEXT}/api/categories/`,
  "products": `${SERVER_CONTEXT}/api/allProducts/`,
  "add-products": `${SERVER_CONTEXT}/api/product/`,
  "login": `${SERVER_CONTEXT}/api/login/`,
  "register": `${SERVER_CONTEXT}/api/register/`,
  "current-user": `${SERVER_CONTEXT}/api/current-user/`,
  "create-store": `${SERVER_CONTEXT}/api/store/`,
  "payment": `${SERVER_CONTEXT}/api/pay/`,
  "payment":(id) => `${SERVER_CONTEXT}/api//product/${id}/`,
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

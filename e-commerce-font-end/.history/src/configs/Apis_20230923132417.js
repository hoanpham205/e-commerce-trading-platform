import axios from "axios";
import cookie from "react-cookies";


const SERVER = "http://localhost:8080";

export const endpoints = {
  "categories": `${}/api/categories/`,
  "products": `${SERVER_CONTET}/api/allProducts/`,
  "add-products": `${}/api/product/`,
  "login": `${}/api/signin/`,
  "register": `${}/api/signup/`,
  "current-user": `${}/api/current-user/`,
  "create-store": `${}/api/store/`,
  "payment": `${}/api/pay/`,
  "delete-product":(id) => `${}/api/product/${id}/`,
  "comment": (id) => `${}/product/${id}/comment`,
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

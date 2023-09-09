import axios from "axios";
import cookie from "react-cookies";

const SERVER_CONTEXT = "/trading-platform";
const SERVER = "http://localhost:8080";

export const endpoints = {
    "categories": `${SERVER_CONTEXT}/api/categories/`,
    "products": `${SERVER_CONTEXT}/api/products/`,
    "login": `${SERVER_CONTEXT}/api/login/`,
    "current-user": `${SERVER_CONTEXT}/current-user/`,
}

export const authApi = () => {
    return axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            "Authorization":  cookie.load("token")
        }
    })
}

export const loginUser = async (user,dispatch, navigate) => {
    
}

export default axios.create({
    baseURL: "http://localhost:8080"
})
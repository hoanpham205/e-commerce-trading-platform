import axios from "axios";
import cookie from "react-cookies";
import { loginStart,loginSuccess,loginFailed } from "../redux/slices/authSlice";

const SERVER_CONTEXT = "/trading-platform";
const SERVER = "http://localhost:8080";

export const endpoints = {
    "categories": `${SERVER_CONTEXT}/api/categories/`,
    "products": `${SERVER_CONTEXT}/api/products/`,
    "login": `${SERVER_CONTEXT}/api/login/`,
    "current-user": `${SERVER_CONTEXT}/api/current-user/`,
}

export const authApi = () => {
    return axios.create({
        baseURL: SERVER,
        headers: {
            "Authorization":  cookie.load("token")
        }
    })
}

export const loginUser = async (user,dispatch, navigate) => {
    dispatch(loginStart());
    try{
        const res = await axios.post('http://localhost:8080/trading-platform/login',user);
        dispatch(loginSuccess(res.data));
        navigate('/checkout');
    } catch (e){
        dispatch(loginFailed())
    }
}

export default axios.create({
    baseURL: SERVER
})
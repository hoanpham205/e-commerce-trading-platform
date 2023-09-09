import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import  sellerSlice  from "./slices/sellerSlice";

const store = configureStore({
    reducer:{
        auth: authSlice,
        cart: cartSlice,
        seller:
    }
});

export default store;

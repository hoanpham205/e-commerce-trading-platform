import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import  sellerSlice  from "./slices/sellerSlice";
import  productSlice  from "./slices/product";

const store = configureStore({
    reducer:{
        auth: authSlice,
        cart: cartSlice,
        seller: sellerSlice,
        product: 
    }
});

export default store;

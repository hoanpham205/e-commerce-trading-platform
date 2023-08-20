import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import auth

const store = configureStore({
    reducer:{
        auth: 
        cart: cartSlice,
    }
});

export default store;

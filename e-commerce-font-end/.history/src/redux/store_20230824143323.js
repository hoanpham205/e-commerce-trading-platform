import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import authSlice from "./slices/authSlice";
import 

const store = configureStore({
    reducer:{
        auth: authSlice,
        cart: cartSlice,
    }
});

export default store;

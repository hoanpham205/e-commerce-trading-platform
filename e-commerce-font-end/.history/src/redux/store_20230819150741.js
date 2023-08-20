import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        auth: re
        cart: cartSlice,
    }
});

export default store;

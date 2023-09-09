import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};
export const sellerSlice = createSlice( {
    name: 'seller',
    initialState:{

    },

    LoadSellerRequest: (state) => {
      state.isLoading = true;
    },
    LoadSellerSuccess: (state, action) => {
      state.isSeller = true;
      state.isLoading = false;
      state.seller = action.payload;
    },
    LoadSellerFail: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSeller = false;
    },
  
    // get all sellers ---admin
    getAllSellersRequest: (state) => {
      state.isLoading = true;
    },
    getAllSellersSuccess: (state, action) => {
      state.isLoading = false;
      state.sellers = action.payload;
    },
    getAllSellerFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  });

  export const {LoadSellerRequest,LoadSellerSuccess, LoadSellerFail,getAllSellersSuccess,getAllSellersSuccess} =sellerSlice.actions;
  export default sellerSlice.reducer;
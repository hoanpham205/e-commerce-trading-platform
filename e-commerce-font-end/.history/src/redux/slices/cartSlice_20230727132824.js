import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity:0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action) =>{
        const newItem = action.payload
        const existingItem = state.cartItems.find(item => item.
    }
  }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer
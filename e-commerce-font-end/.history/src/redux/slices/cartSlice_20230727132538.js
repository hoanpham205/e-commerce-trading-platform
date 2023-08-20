import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    tol
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
});

export const {} = cartSlice.actions

export default cartSlice.reducer
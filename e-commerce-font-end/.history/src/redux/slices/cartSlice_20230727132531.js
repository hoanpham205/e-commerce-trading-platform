import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    total
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}
});

export const {} = cartSlice.actions

export default cartSlice.reducer
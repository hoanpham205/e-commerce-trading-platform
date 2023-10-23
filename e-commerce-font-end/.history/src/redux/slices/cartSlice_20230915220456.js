import { createSlice } from "@reduxjs/toolkit";

//định nghĩa trạng thái ban đầu của giỏ hàng
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // thêm sanpham
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.productId === newItem.productId
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          productId: newItem.productId,
          productName: newItem.productName,
          imageUrl: newItem.imageUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      //tổng tiền
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    //xoá một sp ra khỏi giỏ hàng
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.productId === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.productId !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    resetTotalQuantity: (state) => {
      state.cartItems  = [];;
      state.totalQuantity = 0;
    },
  },
});

export const cartActions = cartSlice.actions; // xuất các actions  đã tạo để sủ dụng chúng ở cá components khác

export default cartSlice.reducer;

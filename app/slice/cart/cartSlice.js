import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (!state.cartItem.includes(action.payload)) {
        state.cartItem.push(action.payload);
      }
      state.cartCount = state.cartItem.length;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (exist >= 0) {
        state[exist].amount += 1;
      } else {
        const tempVar = { ...action.payload, amount: 1 };
        state.push(tempVar);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

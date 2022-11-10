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
    decreaseAmount: (state, action) => {
      const exist = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state[exist].amount > 1) {
        state[exist].amount -= 1;
      } else {
        return;
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    increaseByAmount: (state, action) => {
      const find = state.findIndex(
        (product) => product.id === action.payload.product.id
      );

      state[find].amount = +action.payload.amount;
    },
  },
});

export const { addToCart, decreaseAmount, removeFromCart, increaseByAmount } =
  cartSlice.actions;

export default cartSlice.reducer;

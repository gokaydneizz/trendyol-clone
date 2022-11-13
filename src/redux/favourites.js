import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    favouritesHandler: (state, action) => {
      const exist = state.findIndex(
        (product) => product.id === action.payload.product.id
      );
      if (exist >= 0) {
        return state.filter(
          (product) => product.id !== action.payload.product.id
        );
      } else {
        const tempVar = { ...action.payload.product };
        state.push(tempVar);
      }
    },
  },
});

export const { favouritesHandler } = favouritesSlice.actions;

export default favouritesSlice.reducer;

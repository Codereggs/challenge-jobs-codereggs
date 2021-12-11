import { createSlice } from "@reduxjs/toolkit";

const selectedProduct = createSlice({
  name: "selectedProduct",
  initialState: {
    product: [],
  },
  reducers: {
    getProductDetails: (state, { payload }) => {
      state.product = payload;
    },
  },
});

export const { getProductDetails } = selectedProduct.actions;
export default selectedProduct.reducer;

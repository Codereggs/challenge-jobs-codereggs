/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import listGet from "../features/listGet";
import productChoosed from "../features/productChoosed";
import selectedProduct from "../features/selectedProduct";

export const store = configureStore({
  reducer: {
    get: listGet,
    productDetail: selectedProduct,
    choosedProduct: productChoosed,
  },
});

import { createSlice } from "@reduxjs/toolkit";

/* export const getList = createAsyncThunk("get/getList", async () => {
  return fetch("https://api.punkapi.com/v2/beers").then((res) => res.json());
}); */

const choosedProduct = createSlice({
  name: "choosedProduct",
  initialState: {
    list: [],
    precio: [],
    precioFinal: 0,
  },
  reducers: {
    choosed: (state, { payload }) => {
      state.list.push(payload);
    },
    price: (state, { payload }) => {
      state.precio.push(payload);
    },
    precioFinalI: (state, { payload }) => {
      state.precioFinal += payload;
    },
    precioFinalD: (state, { payload }) => {
      state.precioFinal -= payload;
    },
    deleteAll: (state, { payload }) => {
      state.precioFinal -= state.precio[payload.id] * payload.cant;
      state.precio.splice(payload.id, 1);
      state.list.splice(payload.id, 1);
    },
  },
});

export const { choosed, price, precioFinalI, precioFinalD, deleteAll } =
  choosedProduct.actions;
export default choosedProduct.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk("get/getProductt", async () => {
  return fetch(
    `https://api.punkapi.com/v2/beers?ids=${window.localStorage.getItem(
      "product"
    )}`
  ).then((res) => res.json());
});

export const getRandom = createAsyncThunk("get/getRandom", async () => {
  return fetch(" https://api.punkapi.com/v2/beers?page=2&per_page=3").then(
    (res) => res.json()
  );
});

const selectedProduct = createSlice({
  name: "selectedProduct",
  initialState: {
    listSell: [],
    list: [],
    state: null,
    stateS: null,
  },
  extraReducers: {
    [getProduct.pending]: (state, action) => {
      state.status = "loading";
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getProduct.rejected]: (state, action) => {
      state.status = "failed";
    },
    [getRandom.pending]: (state, action) => {
      state.stateS = "loading";
    },
    [getRandom.fulfilled]: (state, { payload }) => {
      state.listSell = payload;
      state.stateS = "success";
    },
    [getRandom.rejected]: (state, action) => {
      state.stateS = "failed";
    },
  },
});

export default selectedProduct.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("get/getList", async () => {
  return fetch(
    `https://api.punkapi.com/v2/beers?ids=${window.localStorage.getItem(
      "product"
    )}`
  ).then((res) => res.json());
});

const selectedProduct = createSlice({
  name: "selectedProduct",
  initialState: {
    list: [],
    state: null,
  },
  extraReducers: {
    [getList.pending]: (state, action) => {
      state.status = "loading";
    },
    [getList.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getList.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default selectedProduct.reducer;

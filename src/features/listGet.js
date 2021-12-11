import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getList = createAsyncThunk("get/getList", async () => {
  return fetch("https://api.punkapi.com/v2/beers").then((res) => res.json());
});

const listGet = createSlice({
  name: "getInfo",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    orderByHigherABV: (state) => {
      state.list = state.list.sort((a, b) => a.abv - b.abv);
    },
    orderByLowABV: (state) => {
      state.list = state.list.sort((a, b) => b.abv - a.abv);
    },
    orderByHigherIBU: (state) => {
      state.list = state.list.sort((a, b) => a.ibu - b.ibu);
    },
    orderByLowIBU: (state) => {
      state.list = state.list.sort((a, b) => b.ibu - a.ibu);
    },
    orderByHigherPH: (state) => {
      state.list = state.list.sort((a, b) => a.ph - b.ph);
    },
    orderByLowPH: (state) => {
      state.list = state.list.sort((a, b) => b.ph - a.ph);
    },
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

export const {
  orderByHigherABV,
  orderByLowABV,
  orderByHigherIBU,
  orderByHigherPH,

  orderByLowIBU,
  orderByLowPH,
} = listGet.actions;
export default listGet.reducer;

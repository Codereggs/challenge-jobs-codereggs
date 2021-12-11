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

export default listGet.reducer;

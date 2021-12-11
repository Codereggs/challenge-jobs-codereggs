import { createSlice } from "@reduxjs/toolkit";

/* export const getList = createAsyncThunk("get/getList", async () => {
  return fetch("https://api.punkapi.com/v2/beers").then((res) => res.json());
}); */

const choosedProduct = createSlice({
  name: "choosedProduct",
  initialState: {
    list: [],
  },
  reducers: {
    choosed: (state, { payload }) => {
      state.list.push(payload);
    },
  },
});

export const { choosed } = choosedProduct.actions;
export default choosedProduct.reducer;

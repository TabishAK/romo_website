import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const link = "http://54.183.217.110/";

export const fetchMaincategories = createAsyncThunk(
  "mainCategories/fetchMainCategories",
  async () => {
    const response = await axios.post(link + "mainCategory/");
    return response.data;
  }
);

export const mainCategoriesSlice = createSlice({
  name: "main-categories",
  initialState: {
    mainCategories: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addMaincategories: {
      reducer: (state, action) => {
        // state.mainCategories = action.payload;
      },
    },
  },

  extraReducers: {
    [fetchMaincategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMaincategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.mainCategories.push(...action.payload);
    },
    [fetchMaincategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { addMaincategories } = mainCategoriesSlice.actions;
export default mainCategoriesSlice.reducer;

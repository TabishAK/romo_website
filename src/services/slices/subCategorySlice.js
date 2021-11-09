import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSubcategories = createAsyncThunk(
  "subcategories/fetchSubcategories",
  async () => {
    const response = await axios.get(
      process.env.REACT_APP_AMAZON_SERVER_LINK + "subCategories/"
    );
    return response.data;
  }
);

export const subCategoriesSlice = createSlice({
  name: "sub-categories",
  initialState: {
    subCategories: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addSubcategories: {
      reducer: (state, action) => {
        // state.subCategories = action.payload;
      },
    },
  },

  extraReducers: {
    [fetchSubcategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSubcategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.subCategories.push(...action.payload);
    },
    [fetchSubcategories.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { addSubcategories } = subCategoriesSlice.actions;
export default subCategoriesSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// const link = "http://54.183.217.110/";

// export const fetchActiveSubcategories = createAsyncThunk(
//   "activeSubcategories/fetchActiveSubcategories",
//   async (e) => {
//     const response = await axios.post(
//       link + "products/getFromSlug",
//       JSON.stringify({
//         slug: e.slug,
//       }),
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     console.log(response.data);
//     return response.data;
//   }
// );

// export const activeSubcategoriesSlice = createSlice({
//   name: "active-subcategories",
//   initialState: {
//     activeSubcategories: [],
//     status: "idle",
//     error: null,
//   },

//   reducers: {
//     addActiveSubcategories: {
//       reducer: (state, action) => {
//         // state.mainCategories = action.payload;
//       },
//     },
//   },

//   extraReducers: {
//     [fetchActiveSubcategories.pending]: (state, action) => {
//       state.status = "loading";
//     },
//     [fetchActiveSubcategories.fulfilled]: (state, action) => {
//       state.status = "succeeded";
//       state.activeSubcategories = action.payload;
//     },
//     [fetchActiveSubcategories.rejected]: (state, action) => {
//       state.status = "failed";
//       state.error = action.error.message;
//     },
//   },
// });

// export const { addActiveSubcategories } = activeSubcategoriesSlice.actions;
// export default activeSubcategoriesSlice.reducer;

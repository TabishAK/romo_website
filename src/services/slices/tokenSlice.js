import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "Token",
  initialState: {
    token: null,
  },
  reducers: {
    addToken: {
      reducer: (state, action) => {
        state.token = action.payload;
      },
    },
  },
});

export const { addToken } = tokenSlice.actions;
export default tokenSlice.reducer;

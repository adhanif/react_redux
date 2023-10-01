import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: [],
  reducers: {
    createTitle(state, action) {
      state.push(action.payload);
    },
  },
});

export const { createTitle } = titleSlice.actions;
export default titleSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment(state, action) {
      console.log(JSON.stringify(action));
      return state + action.payload;
    },

    decrement(state, action) {
      console.log(JSON.stringify(action));

      return state - action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducers/counter";
import titleSlice from "../reducers/titles";

const store = configureStore({
  reducer: {
    dani: counterSlice,
    titles: titleSlice,
  },
});

export default store;

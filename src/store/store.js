import { configureStore } from "@reduxjs/toolkit";
import catReducer  from "./catSlice";

const store = configureStore({
  reducer: {
    cats: catReducer,
  },
});

export default store;

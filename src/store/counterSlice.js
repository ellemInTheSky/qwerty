import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementByOne: (state) => {
      state.value += 1;
    },
    incrementByTen: (state) => {
      state.value += 10;
    },
    decrementByOne: (state) => {
      if (state.value > 0) state.value -= 1;
    },
    decrementByTen: (state) => {
      if (state.value >= 10) state.value -= 10;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {
  incrementByOne,
  incrementByTen,
  decrementByOne,
  decrementByTen,
  reset,
} = counterSlice.actions;
export default counterSlice.reducer;

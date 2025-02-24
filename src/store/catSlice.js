import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCats = createAsyncThunk("cats/fetchCats", async () => {
  const response = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  return response.data;
});

const catSlice = createSlice({
  name: "cats",
  initialState: {
    images: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchCats.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default catSlice.reducer;

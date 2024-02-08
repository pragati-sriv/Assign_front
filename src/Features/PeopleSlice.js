import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${searchQuery}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  entities: [],
  status: "idle",
  error: null,
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities = action.payload.results;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default peopleSlice.reducer;

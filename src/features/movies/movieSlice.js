import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: {},
};

export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

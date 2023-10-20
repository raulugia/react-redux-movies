import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
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
//method to get all the movies
export const getAllMovies = state => state.movies;
export default moviesSlice.reducer;

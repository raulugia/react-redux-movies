import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import movieApi from "../../common/apis/movieApi"
import {key} from "../../common/apis/movieApiKey"

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
  const movieText = "Harry"
  const response = await movieApi.get(
    `?s=${movieText}&type=movie&apikey=${key}`
    )
    .catch(err => {
      alert(err.message || err)
    })
  return response.data
})

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
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending")
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("fetched");
      return {...state, movies: action.payload}
    },
    [fetchAsyncMovies.rejected]: (state, action) => {
      console.log("rejected")
    },
  }
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

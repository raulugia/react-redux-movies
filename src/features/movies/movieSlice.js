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

export const fetchAsyncSeries = createAsyncThunk("series/fetchAsyncSeries", async () => {
  const seriesText = "Friends"
  const response = await movieApi.get(
    `?s=${seriesText}&type=series&apikey=${key}`
    )
    .catch(err => {
      alert(err.message || err)
    })
  return response.data
})

export const fetchAsyncDetails = createAsyncThunk("series/fetchAsyncDetails", async (id) => {
  const seriesText = "Friends"
  const response = await movieApi.get(
    `?i=${id}&plot=full&apikey=${key}`
    )
    .catch(err => {
      alert(err.message || err)
    })
  return response.data
})

const initialState = {
  movies: {},
  series: {},
  selectMovieOrShow: {},
};

export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
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
    [fetchAsyncSeries.fulfilled]: (state, action) => {
      console.log("fetched");
      return {...state, series: action.payload}
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectMovieOrShow: payload };
    },
  }
});

export const { addMovies } = moviesSlice.actions;

export default moviesSlice.reducer;

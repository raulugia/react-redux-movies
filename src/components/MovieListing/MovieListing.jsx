import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"

const MovieListing = () => {
  const movies = useSelector(state => state.movies)
  const series = useSelector(state => state.series)
  
  const moviesFetched = movies.Response === "True"
  const seriesFetched = series.Response === "True"
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {
            moviesFetched && (
              movies.Search.map(movie => (
                <MovieCard key={nanoid()} {...movie} />
              ))
            )
          }
        </div>
      </div>
      <div className="movie-list">
        <h2>Series</h2>
        <div className="movie-container">
          {
            seriesFetched && (
              series.Search.map(movie => (
                <MovieCard key={nanoid()} {...movie} />
              ))
            )
          }
        </div>
      </div>
    
    </div>
  )
}

export default MovieListing
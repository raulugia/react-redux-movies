import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from "../../common/apis/movieApi"
import {key} from "../../common/apis/movieApiKey"
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const movieText = "Harry"
      const response = await movieApi.get(
        `?s=${movieText}&type=movie&apikey=${key}`
        )
        .catch(err => {
          console.log(err.message || err)
        })
      dispatch(addMovies(response.data))
    }

    fetchMovies()
  }, [])
  return (
    <div className="">
      <div className="banner-img">

      </div>
      <MovieListing />
    </div>
  )
}

export default Home
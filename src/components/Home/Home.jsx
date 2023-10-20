import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from "../../common/apis/movieApi"
import {key} from "../../common/apis/movieApiKey"

const Home = () => {

  useEffect(() => {
    const fetchMovies = async () => {
      const movieText = "Harry"
      const response = await movieApi.get(
        `?t=${movieText}&apikey=${key}`
        )
        .catch(err => {
          console.log(err.message || err)
        })
      console.log(response)
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
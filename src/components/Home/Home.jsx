import React, {useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch])

  return (
    <div className="">
      <div className="banner-img">

      </div>
      <MovieListing />
    </div>
  )
}

export default Home
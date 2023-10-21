import React, {useEffect} from 'react'
import { fetchAsyncDetails } from '../../features/movies/movieSlice'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector  } from 'react-redux'

const MovieDetail = () => {
  const {imdID} = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncDetails(imdID))
  }, [imdID, dispatch])

  const details = useSelector(state => state.details)
  console.log(details)
  return (
    details && (
      <div>
        <p>detail</p>
      </div>
    )

  )
}

export default MovieDetail
import React from 'react'
import "./MovieCard.scss"
import {Link} from "react-router-dom"

const MovieCard = ({Poster, Title, Year, imdbID}) => {
  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
      <div className="card-inner">
        <div className="card-top">
          <img src={Poster} alt={Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{Title}</h4>
            <p>{Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard
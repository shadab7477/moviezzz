import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
const Cards = ({mov}) => {
  return (
    <Link to={`${mov.id}`}  className='' >
        
{/* <img id='poster' width={'100%'} src={`https://image.tmdb.org/t/p/original${mov 
      && mov.poster_path}`} /> */}
      {/* <h2>{mov.id}</h2> */}




      <div className="movie-card mx-3 mb-5 ">
      <div className="card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${mov && mov.poster_path})` }}>
        {/* <h1>hey</h1> */}
        
      </div>
      <div className="card-details text-light ">
        <h5>{mov.original_title}</h5>
        <p>{mov.overview}</p>
    </div>

      </div>

    </Link>

  )
}

export default Cards

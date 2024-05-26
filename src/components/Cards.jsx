import React from 'react'
import "./card.css"
const Cards = ({mov}) => {
  return (
    <div  className='' >
        
{/* <img id='poster' width={'100%'} src={`https://image.tmdb.org/t/p/original${mov 
      && mov.poster_path}`} /> */}
      {/* <h2>{mov.id}</h2> */}




      <div className="movie-card mx-3 ">
      <div className="card" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${mov && mov.backdrop_path})` }}>
        {/* <h1>hey</h1> */}
        <div className="card-overlay">
          <h5 className="card-title">{mov.original_title}</h5>
          {/* <p className="card-genre">{mov.popularity}</p> */}
        </div>
      </div>
      <div className="card-details">
        <h5>{mov.original_title}</h5>
        <p>{mov.overview}</p>
      </div>
    </div>

    </div>
  )
}

export default Cards

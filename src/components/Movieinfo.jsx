import React from 'react'
import { useParams } from 'react-router-dom'
import "./movieinfo.css"
import axios from 'axios'
import { useState,useEffect } from 'react'
const Movieinfo = () => {
    const {id}=useParams()

const [movie,setmovie]=useState(['']

)

useEffect(() => {
    getdetail()
}, [''])


const getdetail=async()=>{

    const data= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
setmovie(data.data)
}

console.log(movie);

console.log(id);
  return (<>
  
  <div class="container8">
  <div class="background">
    <img alt="Title" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
  </div>

  <div class="image-title">
  <img alt="Title" src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />

  </div>

  <div class="content-meta">
    <div class="controls">
      <button class="player">
        <img src="/images/play-icon-black.png" alt="" />
        <span>Play</span>
      </button>
      <button class="trailer">
        <img src="/images/play-icon-white.png" alt="" />
        <span>Trailer</span>
      </button>
      <div class="group-watch">
        <div>
          <img src="/images/group-icon.png" alt="" />
        </div>
      </div>
    </div>
    <div class="sub-title">{movie.original_title}</div>
    <div class="description">{movie.overview}</div>
  </div>
</div>

  </>
  )
}

export default Movieinfo

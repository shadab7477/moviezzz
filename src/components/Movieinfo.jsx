import React from 'react'
import { useParams } from 'react-router-dom'
import "./movieinfo.css"
import axios from 'axios'
import Cards from './Cards'
import Slider from "react-slick";
import { useState,useEffect } from 'react'
import group from "./images/group-icon.png"
const Movieinfo = () => {
    const {id}=useParams()

const [movie,setmovie]=useState([''])
const [trailers,settrailer]=useState([''])
const [imgs,setimgs]=useState([''])


var settings = {
  dots: false,
  infinite: false,
  speed: 500,
   className: "center",
centerMode: true,
infinite: true,
centerPadding: "60px",
slidesToShow: 3,
speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  
  initialSlide: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        initialSlide: 1,
        centerPadding: "30px",
        
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

console.log(trailers);
useEffect(() => {
    getdetail()
    gettrailer()
    getimg()
}, [id])


const getdetail=async()=>{

    const data= await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63`)
setmovie(data.data)
}


const gettrailer=async()=>{
    const datas=await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//    settrailer(datas);
     if (datas.data.results.length > 0) {
         settrailer(datas.data.results[0])
  
         } else {
           alert("Trailer not found. please search another movie")
       }
}

const getimg=async()=>{

  const datas=await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=4e44d9029b1270a757cddc766a1bcb63`)
  setimgs(datas.data.results)
}

console.log(imgs);


return (<>
  
  <div class="container8 container ">
  <div class="background">
    <img alt="Title" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
  </div>

  <div class="image-title">
  <img alt="Title" src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />

  </div>

  <div class="content-meta">
    <div class="controls">
       <a href={movie.homepage} class="player">
        <span><i class="fa-solid fa-play"></i> Play</span>
      </a>
      <div class="group-watch">
        <div>
          <img src={group} alt="" />
        </div>
      </div>
    </div>
    <div class="sub-title">{movie.original_title}</div>
    <div class="description">{movie.overview}</div>
  </div>
</div>

{/* <div className="video-responsive w-100  py-2 ">
    <iframe
      width="100%"
      height="550vh"
      src={`https://www.youtube.com/embed/${trailers.key}?version=3&vq=hd720`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div> */}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vlytpc9fxZM?si=zXRNOXJgclpTT8p-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}


    
<div className="video-responsive container py-2 ">
    <iframe
    id='responsiveyt'
      width="100%"
      height="500vh"
      src={`https://www.youtube.com/embed/${trailers.key}?version=3&vq=hd720`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>


<div className="  my-4 ">
<div className="container-fluid px-4 overflow-hidden p-0  ">
 <h2 className='ps-3' >Similar movies</h2>

      <Slider {...settings}>

      {imgs.map(item => (
          <Cards key={item.id} mov={item}  />
        ))}
          </Slider>
    </div>

  </div>


  </>
  )
}

export default Movieinfo

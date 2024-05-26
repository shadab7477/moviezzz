import React from 'react'
import axios from "axios"
import { useState,useEffect } from 'react'
import Cards from './Cards'
import Slider from "react-slick";

const Latest = () => {

    var settings = {
        dots: true,
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
        
        initialSlide: 0,
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

const[movie,setmovie]=useState([''])
useEffect(() => {

getmovie()
}, [])

    const getmovie=async()=>{
        const data=await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    setmovie(data.data.results)
    }

    console.log(movie);

  return (
    <div className='container-fluid mt-5 text-centerpt-5 px-4 pb-5 ' >
      <h4 className='fw-bold text-start ms-5 ' >NOW playing</h4>


      <div className="slider-container  ">
      <Slider {...settings}>

      {movie.map(item => (
          <Cards key={item.id} mov={item}  />
        ))}
          </Slider>
    </div>
    </div>
  )
}

export default Latest

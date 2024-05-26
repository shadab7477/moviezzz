import React from 'react'
import "./Home.css"
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "./images/slider-scale.jpg"
import Backimg from './Backimg';
import Latest from './Latest';
const Home = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    variableWidth: true
      };
      
  return (<>

<div className="mainhome ">


    <Backimg/>
    <Latest/>
{/* 
   <div className="slider-container pt-4">
      <Slider {...settings}>
        <div>
          <h3>

            <img src={slider1} alt="" />
          </h3>
        </div>
        <div>
          <h3>
          <img src={slider1} alt="" />

          </h3>
        </div>
        <div>
          <h3>
          <img src={slider1} alt="" />

          </h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div> */}
    </div>
  </>
  )
}

export default Home
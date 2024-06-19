import React from 'react'
import "./backimg.css"
import img1 from "./images/viewers-marvel.png"
import img2 from "./images/viewers-disney.png"
import img3 from "./images/viewers-pixar.png"
import img4 from "./images/viewers-starwars.png"
import img5 from "./images/viewers-national.png"

import ReactPlayer from 'react-player'
import { useAuth } from './context/AuthContext'
import vid1 from "./videos/1564676115-marvel.mp4"
import vid2 from "./videos/1564674844-disney.mp4"
import vid3 from "./videos/1564676714-pixar.mp4"
import vid4 from "./videos/1608229455-star-wars.mp4"
import vid5 from "./videos/1564676296-national-geographic.mp4"

const Backimg = () => {
  const { currentUser ,signOut } = useAuth();

  return (
    <div>
     <div className="row pt-4 gap-4 justify-content-center ">
        <div className="col-md-2">
<img className='img' src={img5} alt="" />
<video className='video' autoPlay={true} loop={true} playsInline={true}>
          <source src={vid5} type="video/mp4" />
        </video>
        </div>


        <div className="col-md-2">
        <img className='img' src={img2} alt="" />
        <video className='video' autoPlay={true} loop={true} playsInline={true}>
          <source src={vid2} type="video/mp4" />
        </video>
        </div>
        <div className="col-md-2">

        <img className='img' src={img1} alt="" />
        <video className='video' autoPlay={true} loop={true} playsInline={true}>
          <source src={vid1} type="video/mp4" />
        </video>
        </div>
        <div className="col-md-2">

        <img className='img' src={img3} alt="" />
        <video className='video' autoPlay={true} loop={true} playsInline={true}>
          <source src={vid3} type="video/mp4" />
        </video>
        </div>
        <div className="col-md-2">

        <img className='img' src={img4} alt="" />
        <video className='video' autoPlay={true} loop={true} playsInline={true}>
          <source src={vid4} type="video/mp4" />
        </video>
        </div>
        </div> 
        

        {/* <h1>{currentUser.displayName}</h1> */}

    </div>
    
  )
}

export default Backimg

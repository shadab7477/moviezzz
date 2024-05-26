import React from 'react'
import "./Started.css"
import { Link } from 'react-router-dom'
import loginback from "./images/login-background.jpg"
import logo1 from "./images/cta-logo-one.svg"
import logo2 from "./images/cta-logo-two.png"

const Started = () => {
  return (<>
  <div className="main">
    <div className="content">
<div className="imgdiv">
    <div id='startimg' className=" pt-5">
        <img className='logo1' src={logo1} alt="" />
        <Link  to={"/Home"}>
        <button className='signup' >GET ALL THERE </button>
        
        </Link>
        <p className='description' >

        Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/24, the price of Disney+
            and The Disney Bundle will increase by $1.
        </p>
        <img className='logo2' src={logo2} alt="" />
    </div>
</div>
    </div>
  </div>
  </>
  )
}

export default Started
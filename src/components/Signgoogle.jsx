import React from 'react'
import "./Started.css"
import { useNavigate } from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from "./Config/firebase.js"
import { useAuth } from './context/AuthContext'
const Signgoogle = () => {
    const { currentUser, signIn, signOut } = useAuth();

    const navigate = useNavigate();

    const google=()=>{
        const provider=new GoogleAuthProvider()
        signInWithPopup(auth,provider).then(async(results)=>{
        console.log(results.user);
        signIn(results.user)
navigate("/home")
        })}
    
  return (
    <div onClick={()=>{google()}} className='google bg-white  fs-5 fw-bold py-1  ' >
      <img height={"40px"} width="40px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFUTi1RsVDFSupmzDUJ5I3ZHBtwz043rbHQ&s" alt="" />
  continue with google
    </div>
  )
}

export default Signgoogle

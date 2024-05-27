import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect } from 'react'
import Cards from './Cards'
const Search = () => {

    const {keyword}=useParams()


    // https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63query=tiger&include_adult=false&language=en-US&page=1

useEffect(() => {
 getmovie()
}, [keyword])



const[val,setval]=useState([''])
const getmovie=async()=>{
const page=1;
    const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=${page}`)
setval(res.data.results)
}
console.log(val);
  return (

    <>
    <div className="container pt-4">
<h5>Results related to {keyword} </h5>
<div className="row">
    
{val.map(item => (

    <div className="col-md-3">
          <Cards key={item.id} mov={item}  />
          </div>
        ))}
</div>

    </div>
    
    </>
  )
}

export default Search
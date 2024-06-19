import React from 'react'
import "./Navbar.css"
import { useState ,useEffect} from 'react'
import ham from "./hamburg.png"
import Signgoogle from '../components/Signgoogle'
import logo from "./logo.svg"
import { useAuth } from '../components/context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Navi = () => {
  const { currentUser,  signOut } = useAuth();

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= -80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);



  const [visible, setVisible] = useState(false); // State to track visibility of search input

  const toggleSearchInput = () => {
    setVisible(!visible); // Toggle visibility state
  };

const[val,setval]=useState('')
const get=(e)=>{
 setval(e.target.value)
}

const navigate = useNavigate();

const handleSearch = () => {
  if (val) {
    navigate(`/search/${val}`);
    setval("")
  }
  // You can optionally toggle the search input here
  toggleSearchInput();
};


const handleKeyDown = (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
};

    
  return (<>




  <nav   className="navbar fixed-top ">
  <div class="container ">
    <a class="navbar-brand  " href="#">

        <img src={logo} height="40px" width={"80"} alt="" />
    </a>

<div className="search-container ms-auto ">
      {/* <button onClick={toggleSearchInput}>Toggle Search</button> */}
    
      <input
      
      onChange={(e)=>get(e)}
        type="text"
        onKeyDown={handleKeyDown} 
        className={`search-input ${visible ? 'visible' : ''}`} // Apply 'visible' class when input should be visible
        placeholder="Search movies..."
      /> 

      {/* <Link to={`/search/${val}`} > */}
<svg 
style={{cursor:"pointer"}}
        onClick={handleSearch}
 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search  ms-auto text-light me-md-4 " viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
{/* </Link> */}
    </div>


    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon">

        <img id='ham' src={ham} alt="" />
      </span>
    </button>





    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
        <button type="button" class="btn-close text-light bg-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body text-center ">

{
  currentUser?(
    <>
    <img id='googleimg' src={currentUser.photoURL} alt="" />
<h1> Welcome {currentUser.displayName} </h1>
</>
  ):(
    <Signgoogle/>
  )
}


        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                {/* <hr class="dropdown-divider"> */}
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

  </>
  )
}

export default Navi
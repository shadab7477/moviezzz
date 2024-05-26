import './App.css';
import {Route,Routes} from "react-router-dom"
import Started from './components/Started';
import Home from './components/Home';
import Navi from './Navbar/Navbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Movieinfo from './components/Movieinfo';
function App() {
  return (
<>
{/* <img height={"500px"} src={img} alt=""/> */}
<Navi/>

<Routes>
<Route path='/' element={<Started/>} />
<Route path='/home' element={<Home/>} />
<Route path='/home/:id' element={<Movieinfo/>} />

</Routes>
</>
  );
}

export default App;

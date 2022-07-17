import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Restaurent from "./components/Restaurent";
const App=()=> {
  return (

<Router>
   
      <Navbar/>
   <Routes>
<Route path='/about' element={<About/>}/>
<Route path='/gallery' element={<Gallery/>}/>
<Route path='/restaurent' element={<Restaurent/>}/>
<Route path='/' element={<Home/>}/>
   </Routes>
 
   </Router>
  );
}

export default App;

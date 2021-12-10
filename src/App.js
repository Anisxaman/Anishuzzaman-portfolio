import { BrowserRouter,Routes,Route} from "react-router-dom";
import { render } from "react-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import "./App.css";



import Blogs from "./Pages/Blogs/Blogs";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Loader from "react-loader-spinner";


function App() {
  return (
    <div className="App">
      
      <Loader
        type="Puff"
       
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> 
<BrowserRouter>
        
        
        <Navbar></Navbar>
       
    <Routes>
     
        
       
        {/* <Route exact path="/"  element={<Body/>} />
        <Route  path="/home"  element={<Body/>} />
        <Route  path="/blogs"  element={<Blogs/>} /> */}
        <Route exact path="/"  element={<Home></Home>} />
        <Route  path="/home"  element={<Home></Home>} />
        <Route  path="/blogs"  element={<Blogs/>} />
        <Route  path="/aboutme"  element={<AboutMe/>} />
        <Route  path="/projectDetail/:id"  element={<ProjectDetail/>} />
       
    
    </Routes>
  </BrowserRouter>

      
       
      
       
      
      
    </div>
  );
}

export default App;

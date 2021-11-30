import { BrowserRouter,Routes,Route} from "react-router-dom";
import { render } from "react-dom";


import "./App.css";



import Blogs from "./Pages/Blogs/Blogs";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";


function App() {
  return (
    <div className="App">
         
<BrowserRouter>
        
        
        <Navbar></Navbar>
       
    <Routes>
     
        
       
        {/* <Route exact path="/"  element={<Body/>} />
        <Route  path="/home"  element={<Body/>} />
        <Route  path="/blogs"  element={<Blogs/>} /> */}
        <Route exact path="/"  element={<Home></Home>} />
        <Route  path="/home"  element={<Home></Home>} />
        <Route  path="/blogs"  element={<Blogs/>} />
        <Route  path="/ProjectDetail/:id"  element={<ProjectDetail/>} />
       
    
    </Routes>
  </BrowserRouter>

      
       
      
       
      
      
    </div>
  );
}

export default App;

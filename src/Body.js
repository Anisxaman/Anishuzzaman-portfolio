import React, {useState} from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";
import "./Body.css";
import logo from "./img/logo.png";
import Blogs from "./Pages/Blogs/Blogs";
import Project from "./Project";
import Service from "./Service";

function Body() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          {/* <div className="logo mt-5">
            <img src={logo} alt="" />
          </div> */}
          {/* <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <Link to="/home">
                <li className="nav__items mx__15">Home</li>
              </Link>
              <Link to="/about">
                <li className="nav__items mx__15">About</li>
              </Link>
              <Link to="/services">
                <li className="nav__items mx__15">Services</li>
              </Link>
              <Link to="/portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </Link>
              <Link  to="/blog">
                <li className="nav__items mx__15">Blog</li>
              </Link>
             
            </ul>
          </div> */}




 

























          {/* Toogle Menu */}
          {/* <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div> */}
          {/* {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#about">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#services">Services</a>
            </li>
            <li className="sideNavbar">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar">
              <a href="#blog">Blog</a>
            </li>
            <li className="sideNavbar">
              <a href="#contact">Contact</a>
            </li>
              </ul>
          </div>
           ) : null} */}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className=" text-primary fw-bold">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10 text-info" data-aos="fade-down-left">Hi, I’m Anishuzzaman</h2>
              {/* <h3 className="home__text sweet pz__10">REACT-JS Developer.</h3> */}


    {/* <div class="wrapper ">
    <div class="static-txt">I'm a</div>
    <ul class="dynamic-txts my-5">
      <li><span className="text-warning" style={{fontWeight:"bold",fontSize:"50px"}}>Freelancer</span></li>
      <li><span className="text-warning" style={{fontWeight:"bold",fontSize:"50px"}}>Designer</span></li>
      <li><span className="text-warning" style={{fontWeight:"bold",fontSize:"50px"}}>Developer</span></li>
     
    </ul>
  </div> */}


  <div className="">
    <h1 className="fs-1 fw-bolder">I AM   <ReactTypingEffect style={{fontSize:"60px"}} className="text-danger fw-bolder"
        text={["WEB DEVELOPER", "FREELENCER","Blogger"]}
        cursorRenderer={cursor => <h1 style={{fontSize:"60px"}} className="text-warning "> {cursor}</h1>}

      /> </h1>
 

      <br />

      {/* <ReactTypingEffect
        text={["WEB DEVELOPER", "FREELENCER"]}
        cursorRenderer={cursor => <h1 className="text-warning fs-1">{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span 
                    key={key}
                    style={i%2 === 0 ? { color: 'magenta'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      /> */}

  </div>
      
   
  

















              <h4 className=" fw-bolder text-primary fs-1">Based in Bangladesh.</h4>
            </div>
          </div>
        </div>
      </div>


      <About></About>
      <Service></Service>
      <Project></Project>
      <Contact></Contact>
      <Blog></Blog>
      <Footer />


    </div>
    
  );

}

export default Body;

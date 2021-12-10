import React from 'react';
// import Particles from 'react-particles-js';
import "./Aboutme.css"
import me from "../../img/about_man.png"
import bg from "../../img/about_tringle.png"
const AboutMe = () => {
    
    return (       
        <>
{/* 
<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}
    
    width="100vw"
    /> 

        
        
            
                <h1>My Name is Enam Mohammed Anishuzzaman</h1>
                <h2>I am MERN stack web developer</h2> */}














<section id="about">
 		
	<div class="container">
		<div class="row">
		<div class="col-md-5">
			<div class="about-img">
            <img class="shape" src={bg} alt=""/>
            
            <img class="man" src={me} alt=""/>
            
			</div>
		</div>
		<br/>
		<div class="col-md-7 about-right">
			
			<h2 class="color-3"><b>About Me</b>
			</h2>
			
			<p class="p-first text-white">
			I am a teach enthusiast & a self-thought programmer who wants to start a career as a Web Developer .I Loves to learn & explore new things & passionate about programming. I am willing to accept challenge to improve myself better and develop my skills.
			</p>
			<p class="text-white">
				My TECHNICAL SKILLS:

				<div className="d-flex">
					<div>
							<ul className="d-flex flex-column align-items-baseline mt-5">
								<h2>Front End</h2>
								<li style={{fontSize:"30px"}}><i class="fab fa-html5 fs-1 me-3"></i>HTML</li>
								<li  style={{fontSize:"30px"}}><i  class="fab fa-css3 fs-1 me-3 my-3"></i>CSS</li>
								<li  style={{fontSize:"30px"}}><i   class="fab fa-js fs-1 me-3 my-3"></i>JAVASCRIPT</li>
								<li  style={{fontSize:"30px"}}><i   class="fab fa-react fs-1 text-danger me-3"></i>REACT</li>
							</ul>

					</div>
					<div>
					<ul className="d-flex flex-column align-items-baseline mt-5">
								<h2>Back-End</h2>
								<li style={{fontSize:"30px"}}><i class="fab fa-node-js fs-1 me-3"></i>NODEJS</li>
								<li  style={{fontSize:"30px"}}><i class="fas fa-database fs-1 me-3 my-3"></i>Mongodb</li>
								
								<li  style={{fontSize:"30px"}}><i class="fab fa-node-js fs-1 me-3"></i>NodeExpress</li>
							</ul>

					</div>
			
				</div>
			
			</p>
			<h3 class="color-3 social-link-text">
				<button class="btn btn-danger">Hire Me</button>
			</h3>
			
			<ul class="about-link">
				<li><a href=""><i class="fa fa-facebook"></i></a></li>
				
				<li><a href=""><i class="fa fa-instagram"></i></a></li>
				
				
				<li><a href=""><i class="fa fa-twitter"></i></a></li>
				
				
				<li><a href=""><i class="fa fa-linkedin"></i></a></li>
				
				
				<li><a href=""><i class="fa fa-youtube-play"></i></a></li>
		 
			</ul>
		 
			
		</div>
	 
		</div>
	</div>
  
 	</section>

                
            
        </>
    );
};

export default AboutMe;
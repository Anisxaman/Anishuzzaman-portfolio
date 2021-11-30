import React, { useEffect, useState } from "react";
import "./Project.css";
import Project1 from './img/bike.PNG';
import Project2 from './img/doctor.PNG';
import Project3 from './img/food.PNG';
import Project4 from './img/portfolio-4.jpg';
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem/ProjectItem";

function Project() {

    const [data, setdata] = useState({})


    useEffect(() => {
        fetch("./FakeData.json")
        .then(res=>res.json())
        .then(data=>setdata(data))
      
    }, [])
















  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading line-1 anim-typewriter">My Latest Project</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>



<ProjectItem></ProjectItem>




    
     
    </div>
  );
}

export default Project;

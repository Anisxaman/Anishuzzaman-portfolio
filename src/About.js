import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2 ">
            {/* <h1 className="about__heading line-1 anim-typewriter ">About Me</h1> */}
            <h1 className="about__heading  ">About Me</h1>
            {/* <h1 className="typewriter">About Me</h1> */}
            <div className="about__meta">
              <p data-aos="fade-up-right" data-aos-duration="2000" className="about__text p__color">
              I am a teach enthusiast & a self-thought programmer who wants to start a career as a Web Developer .
              </p>
              <p data-aos="fade-up-left" data-aos-duration="2000" className="about__text p__color">
              I Loves to learn & explore new things & passionate about programming. I am willing to accept challenge to improve myself better and develop my skills.
              </p>
              <p data-aos="fade-up-right" data-aos-duration="2000" className="about__text p__color">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered in some form, by injected humour,
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1zSgMDsT_wIU-62Ivmm61Bk_wvLrKiq74/view?usp=sharing" target="_blank">
                  <button className="about btn pointer">Download Rsume</button>
                </a>
                <a href="#">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;

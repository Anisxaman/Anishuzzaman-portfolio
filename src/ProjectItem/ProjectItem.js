import React from 'react';
import Project1 from '../img/bike.PNG';
import Project2 from '../img/doctor.PNG';
import Project3 from '../img/food.PNG';
// import Project4 from './img/portfolio-4.jpg';
import { Link } from "react-router-dom";

const ProjectItem = () => {
    return (
        <div>
            <div className="container mt-5">
           <div className="row">
             
             <div className="col-lg-3 col-12">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">Bike Demo official Website</h4>


                     <div className="d-flex ">
                     <a href="https://scambler-dukati.firebaseapp.com/" className="project__btn" target="_blank">View Demo</a>
                     <Link to="/projectDetail/${info.id}" className="project__btn" target="_blank">Details</Link>
                     

                     </div>
                   

                     </div>
                 </div>
             </div>


             <div className="col-lg-3 col-12">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img img-fluid" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">DOCTOR’S HOSPITAL</h4>

                     <div className="d-flex ">
                     <a href="https://life-lione-hospital.firebaseapp.com/" className="project__btn" target="_blank">View Demo</a>
                     <a href="https://scambler-dukati.firebaseapp.com/" className="project__btn" target="_blank">Details</a>
                     

                     </div>
                     
                     </div>
                 </div>
             </div>


             <div className="col-lg-3 col-12">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     {/* <h5 className="project__text">Development</h5> */}
                     <h4 className="project__text">Food Delivery</h4>
                     <div className="d-flex ">
                     <a href="https://airlines-dba70.firebaseapp.com/" className="project__btn" target="_blank">View Demo</a>
                     <a href="https://scambler-dukati.firebaseapp.com/" className="project__btn" target="_blank">Details</a>
                     

                     </div>
                     
                     
                     </div>
                 </div>
             </div>


             {/* <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project4} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="#" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
             
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div> */}

           </div>
       </div>
            
        </div>
    );
};

export default ProjectItem;
import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
import JotformEmbed from 'react-jotform-embed';

function Contact() {



    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text" data-aos="flip-right"     data-aos-duration="2000"
>Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+880 01832205399</strong> or email <strong>anissxaman@gmail.com</strong></p>
                        </div>


{/*                      
                        <script type="text/javascript" src="https://form.jotform.com/jsform/213322796818059"></script> */}

<JotformEmbed src="https://form.jotformeu.com/213322796818059" />                       

                        {/* <a href="https://form.jotform.com/213322796818059">
                        <button  type="button" class="btn btn-primary btn-lg">Contact </button>

                        </a> */}


                        
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact

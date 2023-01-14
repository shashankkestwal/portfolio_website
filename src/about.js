import react from 'react'
import Image from './image.js'
import img from './bubble-gum-support.gif'
import Card from './card.js'
import './about.css'

export default class about extends react.Component{
  
  render(){
    return (
      <div className="personal-data">
          <p id="animated-name">
             <span className="neon-orange">Shashank Kestwal</span>
             <span className="neon-blue">Full Stack Developer</span>
          </p>
          <div className="social_icons_container"> 
            <a className="social_link" target="_blank" href="https://www.instagram.com/shashank_kestwal/" target="_blank"><i className="fa-brands fa-square-instagram"> </i></a>
            <a className="social_link" target="_blank" href="https://www.linkedin.com/in/shashank-kestwal/"><i className="fa-brands fa-linkedin"></i></a>
            <a className="social_link" target="_blank" href=""><i className="fa-brands fa-twitter"></i></a>
            <a className="social_link" target="_blank" href="https://wa.link/qxpdnp"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
          <div id="grid_data"> 
            <p><span>Name </span> Shashank Kestwal</p>
            <p><span>Age </span> 20</p>
            <p><span>Address (Temperory) </span> 1200/C Govindpuri, Delhi India</p>
            <p><span>Address (Permanent) </span> Vishal nagar colony, Kashipur, Uttarakhand </p>
            <button id="cv_button"> Download CV</button>
        </div>
        
      </div>
      );
  }
} 

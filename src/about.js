import react from 'react'
import Card from './card.js'
import resume from './assets/resume.pdf'
import './about.css'

export default class about extends react.Component{
  
  render(){
    return (
      <div className="personal-data">
          <p id="animated-name">
             <span className="neon-orange name">Shashank Kestwal</span>
             <span className="neon-blue profile">Full Stack Developer</span>
          </p>
          <div id="grid_data"> 
            <p><span>Address  </span> Vishal nagar colony, Kashipur, Uttarakhand </p>
            <div className="social_icons_container"> 
              <a className="social_link" target="_blank" href="https://www.instagram.com/shashank_kestwal/" target="_blank"><i className="fa-brands fa-square-instagram"> </i></a>
              <a className="social_link" target="_blank" href="https://www.linkedin.com/in/shashank-kestwal/"><i className="fa-brands fa-linkedin"></i></a>
              <a className="social_link" target="_blank" href=""><i className="fa-brands fa-twitter"></i></a>
              <a className="social_link" target="_blank" href="https://wa.link/qxpdnp"><i className="fa-brands fa-whatsapp"></i></a>
            </div>

            <button id="cv_button"> <a href={resume} target="_blank">
                Download CV
              </a>
            </button>
        </div>
        
      </div>
      );
  }
} 

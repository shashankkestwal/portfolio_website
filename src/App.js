import './App.css';
import About from './about.js'
import Navbar from'./navbar.js'
import personal_data from './personal_data.js'
import Image from './image.js'
import Skills from './skills.js'
import CollegeEducation from './college_education.js'
import SchoolEducation from './school_education.js'
import html_icon from './assets/html-5.png'
import img from './assets/self1.jpg'
import Contact from './Contact.js'
import Footer from './Footer.js'
import { ParallaxProvider } from 'react-scroll-parallax';


// import {default as Cloudy_background } from './Cloudy.svg'

function App() {
  return (
    <ParallaxProvider>
       <div className="App">
           <Navbar/>
           <div className="main-container">
             <div className="container-app"> 
                <Image source={img}/>
                <About info= {personal_data}/>
             </div>
             <p className="heading neon-orange"><ul>Education</ul></p>
             <CollegeEducation/>
             <SchoolEducation/>
             <p className="heading neon-orange"><ul>skills</ul></p>
             <Skills/>
             <p className="heading neon-orange">Connect with Me !</p>
             <Contact/>
           <div>
             <h1><Footer/></h1>
           </div>
             
         </div>
       </div>
    </ParallaxProvider>
    
  );
}

export default App;


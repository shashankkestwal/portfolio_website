import './App.css';
import About from './about.js'
import Navbar from'./navbar.js'
import personal_data from './personal_data.js'
import Image from './image.js'
import Skills from './skills.js'
import CollegeEducation from './college_education.js'
import SchoolEducation from './school_education.js'
import html_icon from './assets/html-5.png'
import img from './bubble-gum-support.gif'
import Contact from './Contact.js'

// import { default as logo } from '../logo.svg';
// import {default as Cloudy_background } from './Cloudy.svg'

function App() {
  return (
        
    <div className="App">
        <Navbar/>
        <div className="main-container">
          <div className="container-app"> 
            <Image source={img} />
            <About info= {personal_data}/>
          </div>
          <p className="heading neon-orange"><ul>Education</ul></p>
          <CollegeEducation/>
          <SchoolEducation/>
          <p className="heading neon-orange"><ul>skills</ul></p>
          <Skills/>
          <Contact/>
          <div>
            <h1>footer</h1>
          </div>
        </div>

      </div>
    
  );
}

export default App;

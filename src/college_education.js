import react from 'react'
import './education.css'
import Image from './image.js'
import img from './bubble-gum-support.gif'
import { useParallax } from 'react-scroll-parallax';



const CollegeEducation = () =>  {
  const mage = useParallax({
    scale: [0.7, 1, 'easeInQuad']
  });
 
    return (
      <div ref={mage.ref} className='education'>
        <div className="details"> 
          <h2 className="institute_name" >
            Acharya Narendra Dev College, University of Delhi <br/>
            (Undergraduation)
          </h2> 
          <div id="marks"> 
            <p> 
              <span> Bachelors of Computer Science </span> 8.33 CGPA
            </p> 
            <p> 
              <span> Course Work </span>
              C++ Programming, Java Programming, Android Developement, Python,
                    Data Analysis and visualization, Operating System, Computer Networks, Data Structres , Algorithms , Automata theory,
                    Database Management System
            </p>
          </div>
        </div>
        <h3 className="education_time"> 2020 | 2023</h3>
        <div className="institute_image"><Image source={img}/></div>
      </div>
    )
}

export default CollegeEducation
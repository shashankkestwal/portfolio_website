import react from 'react'
import './education.css'
import Image from './image.js'
import img from './bubble-gum-support.gif'

export default class CollegeEducation extends react.Component {
  render() {
    return (
      <div className='education'>
        <div id="college_image"><Image source={img}/></div>
        <h3 id="education_time"> 2020  2023</h3>
        <div id="college_det"> 
          <h2 class="institute_name"> Acharya Narendra Dev College, University of Delhi</h2>
          <h3>(Undergraduation)</h3>
          <p> Persuing Undergraduate degree in the field of computer science from University of Delhi.
              Learnt a lot of things about the feild form the professors and peers.  
          </p>
          <div id="marks"> 
            <p> 
              <span> Bachelors of Computer Science </span> 8.71 CGPA(till 4th sem)
            </p> 
            <p> 
              <span> Course Work </span>
              C++ Programming, Java Programming, Android Developement, Python,
                    Data Analysis and visualization, Operating System, Computer Networks, Data Structres , Algorithms , Automata theory,
                    Database Management System
            </p>
          </div>
        </div>
      </div>
    )
  };
}
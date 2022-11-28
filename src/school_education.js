import react from 'react'
import './education.css'
import Image from './image.js'
import img from './bubble-gum-support.gif'

export default class SchoolEducation extends react.Component {
  render() {
    return (
      <div className='education'>
        <div id="college_image"><Image source={img}/></div>
        <h3 id="education_time"> 2013 2019</h3>
        <div id="college_det"> 
          <h2 class="institute_name"> Shivalik Holy Mount Academy</h2>
          <h2>(Schooling from 6th std.)</h2>
          <h5>CBSE</h5>
          <p> Made some amazing memories. School Helper me develop soft skills inme as 
              well as helped me achive academic excellaence in my board examination. One thing that I
              regret is that sports activities were not much supported in School but everythings that could b good was best.  
          </p>
          <div id="marks"> 
            <p> 
              <span>Intermediate</span> 95.2% (P.C.M) 
            </p> 
            <p> 
              <span>High School</span> 93.6%
            </p>
          </div>
        </div>
      </div>
    )
  };
}
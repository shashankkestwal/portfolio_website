import react from 'react'
import './education.css'
import Image from './image.js'
import img from './bubble-gum-support.gif'
import { useParallax } from 'react-scroll-parallax';


const SchoolEducation =() => {
  const mage = useParallax({
    scale: [0.7, 1, 'easeInQuad']
  });
    return (
      <div ref= {mage.ref} className='education'>
        <div className="institute_image"><Image source={img}/></div>
        <h3 className="education_time"> 2013 | 2020</h3>
        <div className="details"> 
          <h2 className="institute_name school">
            Shivalik Holy Mount Academy<br/>
            (Schooling from 6th std.)</h2>
          <h2>CBSE</h2>
          <p> Made some amazing memories. School Helper me develop soft skills inme as 
              well as helped me achive academic excellaence in my board examination. One thing that I
              regret is that sports activities were not much supported in School but everythings that could b good was best.  
          </p>
          <div className="marks"> 
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
}

export default SchoolEducation
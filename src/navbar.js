import react from 'react'
import './navbar.css'
import eduaction_icon from './assets/icons8-education-32.png'
export default class navbar extends react.Component {
  render() {
    return (
      <div className='navbar'>
          <a href="#" className="links"> Education </a>
          <a href="#" className="links"> About</a>
          <a href="#" className="links"> Skills</a>
          <a href="#" className="links"> Contact</a>
      </div>
    )
  };
}

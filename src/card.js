import react from 'react'
import './card.css'
import Image from './image.js'
import img from './bubble-gum-support.gif'

export default class card extends react.Component {
  render() {
    return (
      <div className="skill_card"> 
        <Image source = {img} />
        <p> Front end skills </p>
        <a href='#'>link</a>
      </div>
    )

  };
}
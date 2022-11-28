import react from 'react'
import './card.css'
import Image from './image.js'
import x from './assets/sitting_person.svg'

export default class card extends react.Component {
  static defaultProps = {
    img : x, 
    txt : "frontend skills"
  };

  render() {
    return (
      <div className="skill_card"> 
        <Image source = {this.props.img} />
        <p> {this.props.txt} </p>
        <a href='#'>link</a>
      </div>
    )
  };
}

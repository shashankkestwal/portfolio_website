import react from 'react'
import './skills.css'
import Card from './card.js'
import img from './assets/standing_person.png'

export default class skills extends react.Component {
  render (){
    return (
        <div className="skill_cards_container">
          <Card img={img}/>
          <Card />
          <Card/>
          <Card/>
        </div>
    )
  };
}
import react from 'react'
import './skills.css'
import Card from './card.js'
export default class skills extends react.Component {
  render (){
    return (
        <div className="skill_cards_container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
       
    )
  };
}
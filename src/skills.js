import react from 'react'
import './skills.css'
import Card from './card.js'
import img from './assets/standing_person.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class skills extends react.Component {
  render (){
    return (
        <div className="skill_cards_container">
          <Carousel autoPlay={true}
                  emulateTouch={true}
                  infiniteLoop={true}
                  interval={2500}
                  stopOnHover={true}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}>
                <Card img = {img}/>
                <Card/>
                <Card/>
          </Carousel>
        </div>         
    )
  };
}
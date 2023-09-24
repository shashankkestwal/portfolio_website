import img from './assets/reading_girl.jpg'
import Image from './image.js'
import useTextState from "./Hooks/useTextState.js"
import {useState} from "react"
import "./Contact.css"


const Contact = (props) => {
  const [email, setEmail] = useTextState("");
  const [message, setMessage] = useTextState("");
  const [sentAlert, setSentAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("here")
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)){ 
      document.getElementById("email").classList.remove('add_error');
      console.log(email, message)
    } else {
      document.getElementById ("email").classList.add('add_error');
      return
    }

    let connector_data = {
      'connector': { 
        'email': email,
        'message': message 
      }
    };
    connector_data = JSON.stringify(connector_data)

    fetch("http://localhost:3000/connectors", {
      method: "POST",
      mode: 'cors',
      body: connector_data,
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((res)=>{
        console.log("your message has been sent to shashank kestwal :) ")
        setSentAlert(true)
        console.log(sentAlert)
      }).catch((e)=>{
        console.log("Facing some issues while sending your message :(")
    })
  }

  const form = () => {
    return 
      <div className="contact-container">
        <div className='contact_image'>
          <Image source = {img} />
        </div>
        <div className="form-container">
          <form className="form"> 
            <label id="email" className='l neon-orange' htmlFor="email">Email Address</label>
            <input value={email} className='form_field' type="text" name='email' id="email" placeholder='Email' onChange={setEmail}>
            </input>
            <label className='l neon-orange' htmlFor="message">Message </label>
            <textarea value={message} type="text" name='message' id="message" rows= '5' placeholder='Message' onChange={setMessage}>
            </textarea>
            <button id='btn' onClick={handleSubmit}>Send Mail</button>
          </form>
        </div>
      </div>
  }
  if(!sentAlert)
    return(  
        <div className="contact-container">
          <div className='contact_image'>
            <Image source = {img} />
          </div>
          <div className="form-container">

            <form className="form"> 
              <label id="email" className='l neon-orange' htmlFor="email">Email Address</label>
              <input value={email} className='form_field' type="text" name='email' id="email" placeholder='Email' onChange={setEmail}>
              </input>
              <label className='l neon-orange' htmlFor="message">Message </label>
              <textarea value={message} type="text" name='message' id="message" rows= '5' placeholder='Message' onChange={setMessage}>
              </textarea>
              <button id='btn' onClick={handleSubmit}>Send Mail</button>
            </form>
          </div>
        </div> 
      )
  else {
    return (
      <div className="contact-container">
          <div className='contact_image'>
            <Image source = {img} />
          </div>
          <div className="form-container">
            <h1 id="thanks" className="neon-blue">Thank You !!!</h1>
            <h1 className="neon-orange"> I will contact you soon </h1> 
          </div>
        </div> 
    )
  }
  
} 

export default Contact
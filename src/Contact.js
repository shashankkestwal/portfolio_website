import react from 'react'
import img from './assets/reading_girl.jpg'
import Image from './image.js'
import "./Contact.scss"


class Contact extends react.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
    message: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      email: "", 
      message: ""
    })
    console.log(this.state)
  }

  render(){
    return(
      <div className="contact-container">
        <div className='contact_image'>
          <Image source = {img} />
        </div>
        <div className="form-container">
          <h1 className="neon-blue">Connect with Me !</h1>
          <form className="form"> 
            <label className='l neon-orange' htmlFor="email">Email Address</label>
            <input className='form_field' type="text" name='email' id="email" placeholder='Email' onChange={this.handleChange}></input>

            <label className='l neon-orange' htmlFor="message">Message </label>
            <textarea type="text" name='message' id="message" rows= '5' placeholder='Message' onChange={this.handleChange}></textarea>

            <button id='btn' onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
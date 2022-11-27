import react from 'react'
import img from './assets/reading_girl.jpg'
import Image from './image.js'
import "./Contact.css"


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
    console.log(this.state)
  }

  render(){
    return(
      <div className="contact-container">
      <div className='contact_image'>
        <Image source = {img} />
      </div>
      <div className="form-container">
        <form className="form"> 
          <label htmlFor="email">Email Address</label>
          <input type="text" name='email' id="email" placeholder='email' onChange={this.handleChange}></input>

          <label htmlFor="message">Message </label>
          <textarea type="text" name='message' id="message" rows= '5' placeholder='message' onChange={this.handleChange}></textarea>

          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
      </div>
    )
  }
}

export default Contact
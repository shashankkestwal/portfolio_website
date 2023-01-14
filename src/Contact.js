// import react, {useState} from 'react'
import img from './assets/reading_girl.jpg'
import Image from './image.js'
import "./Contact.scss"
import useTextState from "./Hooks/useTextState.js"

const Contact = (props) => {
  const [email, setEmail] = useTextState("");
  const [message, setMessage] = useTextState("");

  function handleSubmit(evt){
    evt.preventDefault()
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)){ 
      document.getElementsByClassName("form_field")[0].classList.remove('add_error');
      console.log(email, message)
    } else {
      document.getElementsByClassName("form_field")[0].classList.add('add_error');
    }
  }

  return(
      <div className="contact-container">
        <div className='contact_image'>
          <Image source = {img} />
        </div>
        <div className="form-container">
          <h1 className="neon-blue">Connect with Me !</h1>
          <form className="form"> 
            <label className='l neon-orange' htmlFor="email">Email Address</label>
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

} 


// class Contact extends react.Component {
//   constructor(props) {
//     super(props);
//     this.state = {email: '',
//     message: ''};
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(evt) {
//     this.setState({[evt.target.name]: evt.target.value})
//   }
//   handleSubmit(evt) {
//     evt.preventDefault()
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (this.state.email.match(validRegex)){ 
//       document.getElementsByClassName("form_field")[0].classList.remove('add_error');
//       this.setState({
//       email: "", 
//       message: ""})
//     } else {
//       document.getElementsByClassName("form_field")[0].classList.add('add_error');
//     }
//   }

//   render(){

//     return(
//       <div className="contact-container">
//         <div className='contact_image'>
//           <Image source = {img} />
//         </div>
//         <div className="form-container">
//           <h1 className="neon-blue">Connect with Me !</h1>
//           <form className="form"> 
//             <label className='l neon-orange' htmlFor="email">Email Address</label>
//             <input value={this.state.email} className='form_field' type="text" name='email' id="email" placeholder='Email' onChange={this.handleChange}>
//             </input>
//             <label className='l neon-orange' htmlFor="message">Message </label>
//             <textarea value={this.state.message} type="text" name='message' id="message" rows= '5' placeholder='Message' onChange={this.handleChange}>
//             </textarea>
//             <button id='btn' onClick={this.handleSubmit}>Submit</button>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

export default Contact
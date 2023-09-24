import react from 'react'
import './navbar.css'
import eduaction_icon from './assets/icons8-education-32.png'

const Navbar = () => {

  const handleClick = (element_name) => {
    const element = document.getElementsByClassName(element_name)[0];
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <div>hii</div>
      <div className="navlinks">
        <button onClick={e =>handleClick('education')} className="links">  Education </button>
        <button onClick={e =>handleClick('skill_cards_container')} className="links"> Skills</button>
        <button onClick={e =>handleClick('contact-container')} className="links"> Contact</button>
      </div>
    </div>
  )
}

export default Navbar


// export default function App() {
//   const ref = useRef(null);

//   const handleClick = () => {
//     ref.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Scroll to element</button>

//       <div style={{ height: '150rem' }} />

//       <div ref={ref} style={{ backgroundColor: 'lightblue' }}>
//         Coding Beauty
//       </div>

//       <div style={{ height: '150rem' }} />
//     </div>
//   );
// }

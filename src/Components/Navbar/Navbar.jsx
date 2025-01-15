import React, {useState} from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle';
import {Link} from 'react-scroll';


function Navbar() {
     
const [menuOpen, setMenuOpen] = useState(false);
const toggleMenu = () => {setMenuOpen(!menuOpen);};


  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">N<sub>2</sub></div>
                <Toggle />
        </div>
        <div className="n-right">
            <div className={`n-list ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li onClick={toggleMenu}>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass="activeClass">
                    <li onClick={toggleMenu}>Services</li>
                    </Link>
                    <Link spy={true} to='skills' smooth={true} activeClass="activeClass">
                    <li onClick={toggleMenu}>Skills</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true} activeClass="activeClass">
                    <li onClick={toggleMenu}>Portfolio</li>
                    </Link>
                </ul>
            </div>
                    <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
             <Link spy={true} smooth={true} to='Contact' >
            <button className="button n-button">
                Contact
            </button>
            </Link>
        </div>
    </div>
        )
}

export default Navbar


// import React from 'react';
// import './Navbar.css';
// import Toggle from '../Toggle/Toggle';
// import {Link} from 'react-scroll';


// function Navbar() {
     
// const [menuOpen, setMenuOpen] = useState(false);
// const toggleMenu = () => {setMenuOpen(!menuOpen);};


//   return (
//     <div className="n-wrapper">
//         <div className="n-left">
//             <div className="n-name">N<sub>2</sub></div>
//                 <Toggle />
//         </div>
//         <div className="n-right">
//             <div className="n-list">
//                 <ul>
//                     <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
//                     <li>Home</li>
//                     </Link>
//                     <Link spy={true} to='Services' smooth={true} >
//                     <li>Services</li>
//                     </Link>
//                     <Link spy={true} to='skills' smooth={true} >
//                     <li>My Skills</li>
//                     </Link>

//                     <Link spy={true} to='Portfolio' smooth={true} >
//                     <li>Portfolio</li>
//                     </Link>
//                 </ul>
//             </div>
//              <Link spy={true} to='Contact' >
//             <button className="button n-button">
//                 Contact
//             </button>
//             </Link>
//         </div>
//     </div>
//         )
// }

// export default Navbar
import React from 'react'
import "./Header.css"
import { Headerlogo } from '../../assests/commonsvg'
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
function Header() {
  return (
    <div className='headermainDiv'>
            <ul>
               <Link to="work" smooth={true}  duration={900}> <li>Work</li></Link>
               <Link to="about" smooth={true}  duration={900}> <li>About</li></Link>
               <RouterLink to="/"> <li>{Headerlogo}</li></RouterLink>
               <Link to="footer" smooth={true}  duration={1600}> <li>Contact</li> </Link>
               <Link to="/"> <li>Resume</li> </Link>
            </ul>
    </div>
  )
}

export default Header
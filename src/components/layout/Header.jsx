import React from 'react'
import "./Header.css"
import { Headerlogo } from '../../assests/commonsvg'
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Resume from "../../assests/ashwathi_resume.pdf"
function Header() {
  return (
    <div className='headermainDiv'>
            <ul>
               <Link to="work" smooth={true}  duration={900}> <li>Work</li></Link>
               <Link to="about" smooth={true}  duration={900}> <li>About</li></Link>
               <RouterLink to="/"> <li>{Headerlogo}</li></RouterLink>
               <Link to="footer" smooth={true}  duration={1600}> <li>Contact</li> </Link>
               <a href={Resume} target="_blank" rel="noopener noreferrer"><li> Resume</li></a>
            </ul>
    </div>
  )
}

export default Header
import React from 'react'
import "./Header.css"
import { Headerlogo } from '../../assests/commonsvg'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='headermainDiv'>
            <ul>
               <Link to="/#work"> <li>Work</li></Link>
               <Link to="/#about"> <li>About</li></Link>
               <Link to="/"> <li>{Headerlogo}</li></Link>
               <Link to="/#footer"> <li>Contact</li> </Link>
               <Link to="/"> <li>Resume</li> </Link>
            </ul>
    </div>
  )
}

export default Header
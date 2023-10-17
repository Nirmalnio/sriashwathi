import React from 'react'
import { Link } from 'react-router-dom'

function HomepageCard({ image, title, link }) {
  return (
    <Link to={link} style={{textDecoration:"none"}}>
      <div className='Home_pro_cardDiv'>
        <img src={image} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default HomepageCard
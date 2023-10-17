import React from 'react'

function HomepgNumCard({image,content}) {
  return (
    <div className='hm-numcrd-Div'>
        <img src={image} alt="card" />
        <span>{content}</span>
    </div>
  )
}

export default HomepgNumCard
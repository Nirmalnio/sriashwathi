import React from 'react'
import "./HomeTopSection.css"
import circle from "../../assests/images/circle.png"
import { Staricon, arrow, springarrow } from '../../assests/commonsvg'
function HomeTopSection() {
  return (
<div className='HometopmainDiv' id='about'>
    <div className='hometopsecDiv'>
        <div className='hometopleftSec'>
            <h1>👋 Hi, I’m Sri Ashwathi </h1>
            <span>Passionate problem-solving <span className='roletext'>UX/UI designer</span> driven by curiosity.</span>
            <p>I love connecting with and understanding people and I find myself fascinated while breathing life into great ideas through captivating visuals and friendly user experiences, all the while balancing the business needs with logical and product-based thinking.</p>
            <p>Let's collaborate and make a positive design impact!</p>
            <div className='springArrow'>{springarrow}</div>
            <button>Ping me</button>
        </div>

        <div>
          <div className='hometoprightSec'>
          <div className='arrowicon'>{arrow}</div>
          <img src={circle} className='circleimg' alt='circle' /> 
          </div>        
        </div>
    </div>

  <div className='scrollSection'>
    <div class="text-container">
      <div class="text-animation">
        <span>{Staricon} My Work</span>
        <span>{Staricon} My Work</span>
        <span>{Staricon} My Work</span>
        <span>{Staricon} My Work</span>
      </div>
    </div>
  </div>

  <div className='subtexttopSecond'> 
      <span>Explore my portfolio to witness a great blend of aesthetics </span>
      <span>and functionality merging into a seamless user experience. </span>
  </div>

</div>
  )
}

export default HomeTopSection
import React from 'react'
import img1 from "../../assests/images/Fingrad/1.png"
import img2 from "../../assests/images/Fingrad/2.png"
import img3 from "../../assests/images/Fingrad/3.png"
import img4 from "../../assests/images/Fingrad/4.png"

import { springarrow } from '../../assests/commonsvg'
import { rightspringArrow } from '../../assests/commonsvg'
function ComponentsSection() {
  return (
    <div className='compSecMainDiv'>

            <div className='compSecChild'>
                    <div>
                        <img src={img1} alt="" />
                    </div>
                    <div className='compSecText'>
                         <span>Unique illustrations crafted to complement modern themes and enhance concepts</span>
                         <div className='springArrow'>{springarrow}</div>
                    </div>
            </div>

            <div className='compSecChild'>
                    
                    <div className='compSecText'>
                         <span>Unique illustrations crafted to complement modern themes and enhance concepts</span>
                         <div className='springArrow' style={{display:"flex",justifyContent:"end"}}>{rightspringArrow}</div>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                    </div>
            </div>


            <div className='compSecChild'>
                    <div>
                        <img src={img3} alt="" />
                    </div>
                    <div className='compSecText'>
                         <span>Unique illustrations crafted to complement modern themes and enhance concepts</span>
                         <div className='springArrow'>{springarrow}</div>
                    </div>
            </div>

            <div className='compSecChild'>
                    
                    <div className='compSecText'>
                         <span>Unique illustrations crafted to complement modern themes and enhance concepts</span>
                         <div className='springArrow' style={{display:"flex",justifyContent:"end"}}>{rightspringArrow}</div>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                    </div>
            </div>
            
            
    </div>
  )
}

export default ComponentsSection
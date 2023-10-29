import React from 'react'
import { Emailicon, InstagramIcon, Linkedinicon, callicon } from '../../assests/commonsvg'
import "./Footer.css"
import { Staricon } from '../../assests/commonsvg'
function Footer() {
    return (
        <>
            <div className='scrollSection' id='footer'>
                <div class="text-container">
                    <div class="text-animation">
                        <span>{Staricon} Let’s get connected </span>
                        <span>{Staricon} Let’s get connected </span>
                        <span>{Staricon} Let’s get connected </span>
                        <span>{Staricon} Let’s get connected </span>
                    </div>
                </div>
            </div>
            <div className='FootermainDiv'>
                <div>{Emailicon}
                    <a href="mailto:sriashwathi111@gmail.com"> Email </a>
                </div>
                <div>{Linkedinicon}
                    <a href='https://www.linkedin.com/in/sri-ashwathi-r-840375212/'> LinkedIn</a>
                </div>
                <div >{InstagramIcon}
                    <a  href='https://www.instagram.com/_ux_world_/'>Instagram</a>
                </div>
                <div>{callicon}
                    <a  href='tel:+91 8110960999'>+91 8110960999</a>
                </div>

            </div>
        </>
    )
}

export default Footer

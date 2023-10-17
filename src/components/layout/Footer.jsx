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
                    <a /* href='' */> Email </a>
                </div>
                <div>{Linkedinicon}
                    <a /* href='' */> LinkedIn</a>
                </div>
                <div >{InstagramIcon}
                    <a /* href='' */>Instagram</a>
                </div>
                <div>{callicon}
                    <a /* href='' */>+91 8110960999</a>
                </div>

            </div>
        </>
    )
}

export default Footer

import React from 'react'
import img1 from "../../assests/images/Fingrad/benefit 1.png"
import img2 from "../../assests/images/Fingrad/benefit 2.png"
import img3 from "../../assests/images/Fingrad/benefit 3.png"
import img4 from "../../assests/images/Fingrad/benefit 4.png"
import process from "../../assests/images/Fingrad/process fingrad.png"
import compres from "../../assests/images/Fingrad/competitive.png"
import mvp from "../../assests/images/Fingrad/mvp.png"
import strech from "../../assests/images/Fingrad/sketch.png"
import Wirefirm from "../../assests/images/Fingrad/wireframes.png"
import Userflowimg from "../../assests/images/Fingrad/USER FLOW.png"
function BackgroundSection() {
    return (
        <div className='bgSecDiv'>
            <h3>Background</h3>
            <p>I joined Tradebrains as an UI/UX designer a year ago as one of 2 designers along side 6 engineers, 1 product manager and 1 tester.
                I was responsible for product design, UX & UI Strategy and experience for the product. I’ve been extremely fortunate to have a part of the journey & had the opportunities to have grown tremendously durning my time working here.
                Some keys achievements of which i have listed below.</p>

            <div className='bg-featuresDiv'>
                <img src={img1} alt="" />
                <span>Turned an idea into a product</span>
            </div>
            <div className='bg-featuresDiv'>
                <span>Juggled many different hats </span>
                <img src={img2} alt="" />
            </div>
            <div className='bg-featuresDiv'>
                <img src={img3} alt="" />
                <span>Implemented a design process</span>
            </div>
            <div className='bg-featuresDiv'>
                <span>Improved Usability across the platform </span>
                <img src={img4} alt="" />
            </div>


            <h3>Design Process</h3>
            <p>Since Tradebrains is a startup and this was their 1st design project, we needed a design process of how we were going to work.
                I made sure to implement a process that works well with the constraints such as time, funds, resources given without compromising the user experience & designs.</p>
            <img src={process} alt="" className='processImg' />


            <h3>Competitive Analysis</h3>
            <p>Conducted comprehensive Competitive Analysis, examining competitors' approaches, designs, and ideas. By incorporating new and innovative ideas into our product, we were able to stay ahead of the curve and deliver an exceptional user experience.</p>
            <img src={compres} alt="" className='processImg' />

            <h3>MVP</h3>
            <p>Implemented card slotting and basic sketching techniques to develop an effective Minimum Viable Product (MVP). Organized ideas into cards, prioritizing features based on user needs. Rapid ideation and visualization with basic sketches. Iterative testing and feedback refined the design & Streamlined, user-centric MVP development.</p>
            <img src={mvp} alt="" className='processImg' />
            <img src={strech} alt="" className='processImg'/>

            <h3>User Flow</h3>
            <p className='userflowDescrip'>After i finalized the key features and all pages needed for the product through the MVP, i started to make an user flow for the product and tree tested with few of the users, from the insights i gathered from them i rearranged and finalized an user-friendly flow.</p>
            <div>
                <b>Scroll left {">"}</b>
            </div>
            <div className='userFlowImgDiv'>
                    <img src={Userflowimg} alt="userflow"/>
            </div>

            <div className='wireframeDiv'>
               <img src={Wirefirm} alt="" className='processImg'/>
            </div>
        </div>
    )
}

export default BackgroundSection
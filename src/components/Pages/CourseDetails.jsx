import React from 'react'
import mock1 from "../../assests/images/Fingrad/mock 1.png"
import mock2 from "../../assests/images/Fingrad/mock 2.png"
import mock3 from "../../assests/images/Fingrad/Mock 3.png" 
import userTesting1 from "../../assests/images/Fingrad/User testing 1.png"
import userTesting2 from "../../assests/images/Fingrad/User testing 2.png"
import userTesting3 from "../../assests/images/Fingrad/User testing 3.png"


function CourseDetails() {
  return (
    <>
    <div className='CourseDetailsContainer'>
        <h3>Course Detail</h3>
        <div className='coursedetailsSection'>
            <div className='sectionDiv'>
                        <img src={mock1} alt="" />
                        <div>
                            <ul className='addrightspac'>
                                <li>Experimented with a unique design, featuring a circular format for the trailer video.</li>
                                <li>Positioned it at the top right to captivate users and aid in their course selection.</li>
                            </ul>
                        </div>
            </div>
            <div className='sectionDiv'>
                        <div>
                            <ul>
                                <li>Experimented with a unique design, featuring a circular format for the trailer video.</li>
                                <li>Positioned it at the top right to captivate users and aid in their course selection.</li>
                            </ul>
                        </div>
                        <img src={mock2} alt="" />
            </div><div className='sectionDiv'>
                        <img src={mock3} alt="" />
                        <div>
                        <ul className='addrightspac'>
                                <li>Experimented with a unique design, featuring a circular format for the trailer video.</li>
                                <li>Positioned it at the top right to captivate users and aid in their course selection.</li>
                            </ul>
                        </div>
            </div>
        </div>
    </div>

    <div className='unittestDiv'>
            <h3>User Testing</h3>
            <span>
            After the product launch, we prioritized enhancing user experience and boosting conversion rates. we conducted user interviews, recorded interactions using UserBrainy, and identified pain points. Brainstorming solutions and sorting by priority and effort, we collaborated with developers for implementation. With insights from Google Analytics and heatmaps, we achieved significant improvements in user experience.
            </span>

            <img src={userTesting1} alt="" />
            <img src={userTesting2} alt="" />
            <img src={userTesting3} alt="" />
    </div>
    
    <div className='unittestDiv'>
            <h3 style={{textAlign:"center"}}>Designed Powerful Dashboards for FinGrad's success</h3>
        <div className='fingradCardGrid'>
                    <div className='fingradSecCard'>
                        <b>Admin</b>
                        <span>
                           Created a user-friendly dashboard for seamless website activity monitoring. Designed dedicated admin pages for efficient management and control.
                        </span>
                    </div>
        
                    <div className='fingradSecCard'>
                        <b>Instructor</b>
                        <span>
                        Revolutionized instructor experience with a powerful dashboard to monitor course/webinar performance and simplified course uploading process.
                        </span>
                    </div>
                    <div className='fingradSecCard'>
                        <b>Sales</b>
                        <span>
                        Empowered the sales team with a customized dashboard and dedicated pages for seamless campaign management and real-time sales performance monitoring.
                        </span>
                    </div>
                    <div className='fingradSecCard'>
                        <b>Affiliate</b>
                        <span>
                          Designed an intuitive affiliate dashboard, showcasing performance slabs and financial insights, along with dedicated pages for monitoring affiliate performance and growth.
                        </span>
                    </div>
        </div>
    </div>


    <div className='unittestDiv'>
        <iframe src="https://www.youtube.com/embed/5GPWrAYAxEA" className='youtubeVideoDiv' frameborder="0"></iframe>
    </div>

    <div className='unittestDiv'>
        <h3 style={{textAlign:"center"}}>Key Takeaways - What did I Learn?</h3>
        <ul className='fingradKeyDiv'>
            <div>
            <li>Embrace iterative design, incorporating feedback for continuous improvement.</li>
            <li>Learnt effective communication with stakeholders, engineers, and product managers.</li>
            <li>Design is a learning process, focused on improving skills and knowledge.</li>
            <li>Step out of comfort zone, being open to feedback and imperfections.</li>
            <li>Learnt how to find a balance between scope and project requirements.</li>
            <li>Adopted a lean UX approach and considered user needs throughout the process.</li>
            </div>
        </ul>
    </div>
    </>
  )
}

export default CourseDetails
import React from 'react'
import img1 from "../../assests/images/fingrad hm.png"
import img2 from "../../assests/images/shineditz hm.png"
import img3 from "../../assests/images/weedoc hm pg.png"
import img4 from "../../assests/images/findspace hm pg.png"
import HomepageCard from './HomepageCard'


function HomeprojectSection() {

  const imglist = [
    {
        "image" : img1,
        "title" : "FinGrad",
        "link" : "/fingrad"
    },
    {
        "image" : img2,
        "title" : "Shineditz",
        "link" : "/shineditz"
    },{
        "image" : img3,
        "title" : "TheWeedoc",
        "link" : "/"
    },{
        "image" : img4,
        "title" : "FindSpaces",
        "link" : "/"
    },
  ]
  return (
    <div className='home_pro-pge-Div' id='work'>
            {imglist.map((item,i)=>{
                return(
                    <HomepageCard image={item?.image} title={item?.title} link={item?.link} />
                )
            })

            }
    </div>
  )
}

export default HomeprojectSection
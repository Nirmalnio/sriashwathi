import React, { useEffect } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import TopSection from '../components/Pages/TopSection'

function Shineditz() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Header/>
        <TopSection image='pge-top-bgDivShine' title="Shineditz" style={'#007a78'} class="shineditzText" />
        <Footer/>
    </div>
  )
}

export default Shineditz
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Bodyhome from './Bodyhome'
import Slidertop from './Slidertop'
import Sliderclients from './Sliderclients'
import Jobhome from './Jobhome'
import Serviceshome from './Serviceshome'
import Newpostshome from './Newpostshome'
import Pplsay from './Pplsay'
import Footerfoot from './Footerfoot'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Slidertop />
      <div className="flex justify-center align-center font-Montserrat mt-[6rem] text-[1.3rem]">
        Our Clients
      </div>
      <Sliderclients />
      <Jobhome />
      <Serviceshome />
      <Newpostshome />
      <Footer />
      <Footerfoot />
    </div>
  )
}

export default Homepage

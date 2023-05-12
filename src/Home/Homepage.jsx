import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Bodyhome from './Bodyhome'

import Footerfoot from './Footerfoot'
import Homeitems from './Homeitems'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Bodyhome />
      <Homeitems />
      <Footer />
      <Footerfoot />
    </div>
  )
}

export default Homepage

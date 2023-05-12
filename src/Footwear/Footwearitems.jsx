import React from 'react'

import Footwearitemone from './Footwearitemone'
import Footwearitemtwo from './Footwearitemtwo'
import Footwearitemthree from './Footwearitemthree'
import Footwearitemfour from './Footwearitemfour'
import Footwearitemfive from './Footwearitemfive'
import Footwearitemsix from './Footwearitemsix'



const Footwearitems = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[95rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center mt-[2rem]'>
        <p>WELCOME TO THE FISHING EQUIPMENTS SECTION</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Footwearitemone />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Footwearitemtwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Footwearitemthree />
        </div>
      </div>
      

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Footwearitemfour />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Footwearitemfive />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Footwearitemsix />
        </div>
      </div>

      

    </div>
  )
}

export default Footwearitems

import React from 'react'

import Campfurnitureitemone from './Campfurnitureitemone'
import Campfurnitureitemtwo from './Campfurnitureitemtwo'
import Campfurnitureitemthree from './Campfurnitureitemthree'
import Campfurniturefour from './Campfurniturefour'
import Campfurnitureitemitemfive from './Campfurnitureitemitemfive'
import Campfurnitureitemsix from './Campfurnitureitemsix'



const Campfurnitureitems = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[95rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center mt-[2rem]'>
        <p>WELCOME TO THE CAMP FURNITURE SECTION</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Campfurnitureitemone />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Campfurnitureitemtwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Campfurnitureitemthree />
        </div>
      </div>
      

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Campfurniturefour />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Campfurnitureitemitemfive />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Campfurnitureitemsix />
        </div>
      </div>

      

    </div>
  )
}

export default Campfurnitureitems

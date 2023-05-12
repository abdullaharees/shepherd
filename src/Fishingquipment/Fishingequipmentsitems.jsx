import React from 'react'

import Fishingequipmentsitemone from './Fishingequipmentsitemone'
import Fishingequipmentsitemtwo from './Fishingequipmentsitemtwo'
import Fishingequipmentsitemthree from './Fishingequipmentsitemthree'
import Fishingequipmentsitemfour from './Fishingequipmentsitemfour'
import Fishingequipmentsitemfive from './Fishingequipmentsitemfive'
import Fishingequipmentsitemsix from './Fishingequipmentsitemsix'



const Fishingequipmentsitems = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[95rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center mt-[2rem]'>
        <p>WELCOME TO THE FISHING EQUIPMENTS SECTION</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Fishingequipmentsitemone />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Fishingequipmentsitemtwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Fishingequipmentsitemthree />
        </div>
      </div>
      

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Fishingequipmentsitemfour />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Fishingequipmentsitemfive />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Fishingequipmentsitemsix />
        </div>
      </div>

      

    </div>
  )
}

export default Fishingequipmentsitems

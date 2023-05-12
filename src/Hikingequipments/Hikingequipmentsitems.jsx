import React from 'react'

import Hikingequipmentsitemone from './Hikingequipmentsitemone'
import Hikingequipmentsitemtwo from './Hikingequipmentsitemtwo'
import Hikingequipmentsitemthree from './Hikingequipmentsitemthree'
import Hikingequipmentsitemfour from './Hikingequipmentsitemfour'
import Hikingequipmentsitemfive from './Hikingequipmentsitemfive'
import Hikingequipmentsitemsix from './Hikingequipmentsitemsix'



const Hikingequipmentsitems = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[95rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center mt-[2rem]'>
        <p>WELCOME TO THE FISHING EQUIPMENTS SECTION</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Hikingequipmentsitemone />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Hikingequipmentsitemtwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Hikingequipmentsitemthree />
        </div>
      </div>
      

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Hikingequipmentsitemfour />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Hikingequipmentsitemfive />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Hikingequipmentsitemsix />
        </div>
      </div>

      

    </div>
  )
}

export default Hikingequipmentsitems

import React from 'react'

import Survivalaiditemone from './Survivalaiditemone'
import Survivalaiditemtwo from './Survivalaiditemtwo'
import Survivalaiditemthree from './Survivalaiditemthree'
import Survivalaiditemfour from './Survivalaiditemfour'
import Survivalaiditemfive from './Survivalaiditemfive'
import Survivalaiditemsix from './Survivalaiditemsix'



const Survivalaiditems = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[95rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center mt-[2rem]'>
        <p>WELCOME TO THE SURVIVAL AID SECTION</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Survivalaiditemone />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Survivalaiditemtwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Survivalaiditemthree />
        </div>
      </div>
      

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Survivalaiditemfour />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Survivalaiditemfive />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Survivalaiditemsix />
        </div>
      </div>

      

    </div>
  )
}

export default Survivalaiditems

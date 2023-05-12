import React from 'react'
import Jobhomecomponenttwo from '../Home/Jobhomecomponenttwo'
import Jobhomecomponentthree from '../Home/Jobhomecomponentthree'
import Jobhomecomponentfive from '../Home/Jobhomecomponentfive'
import Jobhomecomponentfour from '../Home/Jobhomecomponentfour'
import Jobhomecomponentsix from '../Home/Jobhomecomponentsix'
import Bagitemone from './Bagitemone'
import Bagitemtwo from './Bagitemtwo'
import Bagitemthree from './Bagitemthree'
import Bagitemfour from './Bagitemfour'
import Bagitemfive from './Bagitemfive'
import Bagitemsix from './Bagitemsix'



const Bagitems = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[95rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center mt-[2rem]'>
        <p>WELCOME TO THE BAGS SECTION</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Bagitemone />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Bagitemtwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Bagitemthree />
        </div>
      </div>
      

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Bagitemfour />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Bagitemfive />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Bagitemsix />
        </div>
      </div>

      

    </div>
  )
}

export default Bagitems

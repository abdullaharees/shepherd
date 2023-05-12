import React from 'react'
import Jobhomecomponent from './Jobhomecomponent'
import Jobhomecomponenttwo from './Jobhomecomponenttwo'
import Jobhomecomponentthree from './Jobhomecomponentthree'
import Jobhomecomponentfive from './Jobhomecomponentfive'
import Jobhomecomponentfour from './Jobhomecomponentfour'
import Jobhomecomponentsix from './Jobhomecomponentsix'


const Homeitems = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[70rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center'>
        <p>WELCOME TO MIKEY EQUIPMENTS</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Jobhomecomponent />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Jobhomecomponenttwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Jobhomecomponentthree />
        </div>
      </div>
      

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Jobhomecomponentfour />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Jobhomecomponentfive />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Jobhomecomponentsix />
        </div>
      </div>

      

    </div>
  )
}

export default Homeitems

import React from 'react'
import Jobhomecomponent from './Jobhomecomponent'
import Jobhomecomponenttwo from './Jobhomecomponenttwo'
import Jobhomecomponentthree from './Jobhomecomponentthree'


const Jobhome = () => {
  return (
    <div className='bg-[#f7f7f7] dark-bg w-full h-[35rem] flex flex-col justify-center'>
      
      <div className='text-[1.7rem] font-semibold w-full text-center'>
        <p>Recent Jobs</p>
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
      
      <div className='mt-12 justify-center text-center items-center'>
          <button className='py-2 px-5 text-[1.1rem] bg-[#f7f7f7] rounded-md text-black text-center cursor-pointer
          shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
          hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>Browse All Jobs</button>
      </div>

    </div>
  )
}

export default Jobhome

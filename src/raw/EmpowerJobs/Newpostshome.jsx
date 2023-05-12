import React from 'react'
import Jobhomecompone from './Jobhomecomponent'
import Newpostone from './Newpostone'
import Newpostthree from './Newpostthree'
import Newposttwo from './Newposttwo'

const Newpostshome = () => {
  return (
    <div className='bg-gradient-to-b from-[#f7f7f7] to-white dark-bg w-full h-[45rem] flex flex-col justify-center'>
      
      <div className=' w-full text-center'>
        <p className='text-[1.7rem] font-semibold'>Latest News Posts</p>
        <p className='text-[1.1rem] mt-1'>Improve your knowledge and skills and get the best in industry</p>
      </div>

      <div className='flex justify-center space-x-7 mt-10'>
        <div className='flex-wrap xl:flex-nowrap'>
          <Newpostone />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Newposttwo />
        </div>

        <div className='flex-wrap xl:flex-nowrap'>
          <Newpostthree />
        </div>
      </div>
      
     
    </div>
  )
}

export default Newpostshome

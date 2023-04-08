import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { ImOffice } from 'react-icons/im'
import { GiSuitcase } from 'react-icons/gi'
import { BsBookmarkFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'


const Jobhomecomponentthree = () => {
  return (
    <div className='w-[25rem] h-[15rem] bg-[white] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-sm'>
      <div className=' ml-5 flex flex-col '>
        <p className='mt-5 text-[1.2rem] font-semibold'>Accounts Receivable Officer</p>
        <div>
          <div className='flex'>
            <MdLocationOn className='text-[#333333] mt-2' size={17}/>
            <p className='mt-1 ml-2'>Mombasa</p>
          </div>
          <div className='flex'>
            <ImOffice className='text-[#333333] mt-2' size={17}/>
            <p className='mt-1 ml-2'>Logistics & Operations</p>
          </div>
          <div className='flex'>
            <div className='flex'>
              <GiSuitcase className='text-[#333333] mt-2' size={17}/>
              <p className='mt-1 ml-2'>Full Time</p>
            </div>
            <div className='flex ml-7'>
              <BsBookmarkFill className='text-[#333333] mt-2' size={17}/>
              <p className='mt-1 ml-2'>Intermediate</p>
            </div>
          </div>
        </div>
        {/* <div className='w-[25rem] mt-2.5'>
          <text className='mt-1 py-2 px-2 text-xs  bg-[#b9b8b8] hover:bg-[#626161] rounded-md text-white text-center'>
          Project & Program Management</text>
        </div> */}
        <div className='flex justify-between mt-8'>
            <div className='mt-5 py-2 px-3 text-[1rem] bg-[white] rounded-md text-black text-center cursor-pointer
                                    shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
                                    hover:shadow-lg hover:text-[white] hover:border-[black] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>
                View Detail
            </div>
            <div className='flex mt-6 mr-5'>
              <AiOutlineClockCircle className='text-[#333333] mt-2' size={17}/>
              <p className='mt-1 ml-2'>Expiring in 9 Days</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Jobhomecomponentthree

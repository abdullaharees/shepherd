import React from 'react'
import { MdLocationOn } from 'react-icons/md'
import { ImOffice } from 'react-icons/im'
import { GiSuitcase } from 'react-icons/gi'
import { BsBookmarkFill } from 'react-icons/bs'
import { AiOutlineClockCircle } from 'react-icons/ai'


const Bagitemthree = () => {
  return (
    <div className='bg-[#c8c7c7]  rounded-sm'>
      <div className='w-[25rem] h-[25rem] rounded-md flex justify-center'>
        <img className="object-cover h-[25rem] w-[22rem] rounded-md mt-2" src="https://litb-cgis.rightinthebox.com/images/640x640/201907/ejtx1563536247592.jpg" />
      </div>  
      <div className='flex flex-col justify-center items-center mt-5'>
        <p className='text-lg'>60 L Hiking Backpack Rucksack</p>
        <p className='text-xl font-bold'>25KWD</p>
      </div>
      <div className='mt-[1rem] mb-[1rem] flex flex-col text-center items-center'>
          <button className='py-2 px-5 w-[10rem] text-[1.1rem] bg-[#f7f7f7] rounded-md text-black text-center cursor-pointer
          shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
          hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear 
          transition-all duration-150'>Buy Now</button>
          <button className='py-2 px-5 w-[10rem] mt-2 mb-5 text-[1.1rem] bg-[#f7f7f7] rounded-md text-black text-center cursor-pointer
          shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
          hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear 
          transition-all duration-150'>Add to Cart</button>
      </div>
    </div>
  )
}

export default Bagitemthree

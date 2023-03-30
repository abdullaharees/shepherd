import React from 'react'

const Newpostone = () => {
  return (
    <div className='flex flex-col w-[28rem] justify-center'>
        <div className='flex h-[18.5rem]'>
            <img className="w-[28rem] object-cover cursor-pointer" src="https://empower-prod.s3.ap-south-1.amazonaws.com/news/coverImage/v5-coverjpeg-1656672428.jpeg" />
        </div>
        <div>
            <p className='font-semibold mt-2 cursor-pointer'>UnboundTanzania: Asante Sana!</p>
            <p className='text-[0.9rem] mt-3'>By Verlaine-Diane Soobroydoo on 01 Jul 2022</p>
        </div>
        <div className='flex justify-between'>
            <div className='w-[25rem] mt-2.5'>
            <text className='mt-3 py-1 px-2 text-xs  bg-[#d8d8d8] rounded-full'>
            Motivation</text>
            </div>
            <div className='mt-5 flex justify-center '>
                <p className='py-2 w-[8rem] text-[1rem] bg-[white] rounded-md text-black cursor-pointer text-center
                                    shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
                                    hover:shadow-lg hover:text-[white] hover:border-[black] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>
                                    Read Now</p>
            </div>
        </div>
    </div>
  )
}

export default Newpostone

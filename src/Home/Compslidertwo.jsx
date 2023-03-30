import React from 'react'
import bannertwo from "../pictures/bannertwo.png"

const Compslidertwo = () => {
  return (
    <div className='w-full flex'>
        <div className=' ml-[9rem] mt-[10rem]'>
            <p className='text-[2.3rem] w-full montserrat font-semibold '>Our Talent Is Finding Yours</p>
            <p className='text-[1.1rem] w-[40rem] montserrat'>Explore our smart jobs platform and identify the right opportunity for you.</p>
            <div className='mt-5 py-2 px-5 w-[9rem] text-[1.1rem] bg-[white] rounded-md text-black text-center cursor-pointer
                                    shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
                                    hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>
                Book Now
            </div>
        </div>      
        <div className=' ml-[5rem] mt-[4rem]'>
            <img className='w-[30rem] mr-2 ml-1' src={bannertwo} alt="bannertwo" />
        </div>
    </div>
  )
}

export default Compslidertwo

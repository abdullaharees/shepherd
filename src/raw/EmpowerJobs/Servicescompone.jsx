import React from 'react'

const Servicescompone = () => {
  return (
    <div className='flex flex-col w-[21rem]  text-center justify-center'>
        <div className='flex justify-center'>
         <img className="w-[20rem] object-cover" src="https://www.empower.co.tz/img/ser-recruitment.png" />
        </div>
        <div className='mt-5'>
            <p className='text-[1.4rem] font-semibold'>Recruitment Services</p>
            <p className='mt-2'>Empower is known for recruiting with speed & precision. Since our inception in 2009 we have recruited for organisations across industries; from international NGOs, Diplomatic Missions, Banks and Telecoms.</p>
        </div>
        <div className='mt-5  justify-center items-center self-center'>
                <p className='py-2 w-[7rem] text-[1rem] bg-[white] rounded-md text-black text-center cursor-pointer
                                    shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
                                    hover:shadow-lg hover:text-[white] hover:border-[black] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>
                                    Know More</p>
            </div>
    </div>
  )
}

export default Servicescompone
{/* <img className="w-[15rem] object-cover" src="" /> */}

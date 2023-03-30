import React from 'react'

const Servicescomptwo = () => {
  return (
    <div className='flex flex-col w-[21rem]  text-center justify-center'>
        <div className='flex justify-center'>
         <img className="w-[20rem] object-cover" src="https://www.empower.co.tz/img/ser-mtc.png" />
        </div>
        <div className='mt-5'>
            <p className='text-[1.4rem] font-semibold'>Career Coaching</p>
            <p className='mt-2'>
            If you are looking to make your next career move, we are here to listen, guide, advise and prepare you for success. We can provide 1-1 skills development and support ensuring you are ready for your next career challenge.            </p>
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

export default Servicescomptwo
{/* <img className="w-[15rem] object-cover" src="" /> */}

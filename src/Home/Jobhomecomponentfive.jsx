import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Jobhomecomponentfive = () => {
  return (
    <div className='  rounded-md'>
    <div className='w-[25rem] h-[20rem] rounded-md'>
      <img className="object-cover h-[25rem] w-[25rem] rounded-md mb-5" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/virginiabeachva/144_3_2827_jpeg_66413112-7389-4a07-b51b-10a2273a69ec.jpg" />
    </div>  
      <div className='mt-[6rem] justify-center text-center items-center'>
    <Link to='/fishingequipments'>
          
          <button className='py-2 px-5 text-[1.1rem] bg-[#f7f7f7] rounded-md text-black text-center cursor-pointer
          shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
          hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>Fishing Equipments</button>
    </Link>

      </div>
  </div>
  )
}

export default Jobhomecomponentfive
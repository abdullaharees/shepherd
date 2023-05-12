import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Jobhomecomponent = () => {
  return (
    <div className='  rounded-md'>
      <div className='w-[25rem] h-[20rem] rounded-md'>
        <img className="object-cover h-[25rem] w-[25rem] rounded-md mb-5"
         src="https://images.squarespace-cdn.com/content/v1/5346a846e4b0101b157468cf/1617091129363-UXGF9G99CF6KH64IARKL/Knee-down%2Bview%2Bof%2Ba%2Bhiker%2Bcrossing%2Ba%2Bsandy%2Bcreek%2Bin%2Bthe%2B%2BXero%2BShoes%2BZ-Trail%2BSandals.jpg?format=750w" />
      </div>  
        <div className='mt-[6rem] justify-center text-center items-center'>
      <Link to='/footwears'>
            
            <button className='py-2 px-5 text-[1.1rem] bg-[#f7f7f7] rounded-md text-black text-center cursor-pointer
            shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
            hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>Footwears</button>
      </Link>
        
        </div>
    </div>
  )
}

export default Jobhomecomponent

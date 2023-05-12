import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Jobhomecomponentsix = () => {
  return (
    <div className='  rounded-md'>
    <div className='w-[25rem] h-[20rem] rounded-md'>
      <img className="object-cover h-[25rem] w-[25rem] rounded-md mb-5"
      src="https://www.anacondastores.com/medias/PACKS-BAGS-CAMP-832x864px.jpg?context=bWFzdGVyfHJvb3R8OTM4MDN8aW1hZ2UvanBlZ3xyb290L2g0NC9oYmYvMTA5MDQwNjI3MjIwNzgvUEFDS1MgXyBCQUdTLUNBTVBfODMyeDg2NHB4LmpwZ3w3MmM3Y2M0MTc3OWYyMTZjMjhhMjRhNTQzZmNjMThkN2UwNTUzOGYzMjZjN2UxNTk3OTdhNjhkN2NlYTc0ZTY2"/>
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

export default Jobhomecomponentsix
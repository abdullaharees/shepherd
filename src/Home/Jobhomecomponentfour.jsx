import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Jobhomecomponentfour = () => {
  return (
    <div className='  rounded-md'>
    <div className='w-[25rem] h-[20rem] rounded-md'>
      <img className="object-cover h-[25rem] w-[25rem] rounded-md mb-5" src="https://www.anacondastores.com/medias/Cat-Image-Health-Safety-832x864.jpg?context=bWFzdGVyfHJvb3R8NTA1MjIzfGltYWdlL2pwZWd8cm9vdC9oZDAvaDc0LzEwMjI5NDYwMzY5NDM4L0NhdCBJbWFnZV9IZWFsdGggJiBTYWZldHlfODMyeDg2NC5qcGd8OTdhM2M4NGYwZmIwNjJlZTg4Y2YwYThmZjk5NDgzNDViYmNmNTRhMzdiNzgxMzlmZTA3NjdhMTFmN2I1OGVmZg" />
    </div>  
      <div className='mt-[6rem] justify-center text-center items-center'>
    <Link to='/survivalaid'>
          
          <button className='py-2 px-5 text-[1.1rem] bg-[#f7f7f7] rounded-md text-black text-center cursor-pointer
          shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
          hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>Survival Aid</button>
    </Link>

      </div>
  </div>
  )
}

export default Jobhomecomponentfour
import React from 'react'


const Survivalaiditemfour = () => {
  return (
    <div className='bg-[#c8c7c7]  rounded-sm'>
      <div className='w-[25rem] h-[25rem] rounded-md flex justify-center'>
        <img className="object-cover h-[25rem] w-[22rem] rounded-md mt-2"
			src="https://www.anacondastores.com/medias/BP90202162-red.jpg-SPOTWF-productHero?context=bWFzdGVyfGltYWdlc3w0NzEwMHxpbWFnZS9qcGVnfGltYWdlcy9oZWQvaGYwLzE0OTQ3MzkyMzIzNjE0L0JQOTAyMDIxNjItcmVkLmpwZ19TUE9UV0ZfcHJvZHVjdEhlcm98ZTQxNDNlOWE3NGZlNGQwM2M5N2U3YWY0MTJjNjU5NTZjNWMyMDVhMGViNmRmNjlhYTc0OWZhMmU5NTZiMWU1Ng"/>
      </div>  
      <div className='flex flex-col justify-center items-center mt-5'>
        <p className='text-lg'>RECYCLED FLEECE BLANKET</p>
        <p className='text-xl font-bold'>20KWD</p>
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

export default Survivalaiditemfour

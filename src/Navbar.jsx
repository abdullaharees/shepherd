import {React, useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import {RiArrowDownSLine} from 'react-icons/ri'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {MdShoppingCart} from 'react-icons/md'


import Mainlogo from "./pictures/Mainlogo.png";
import homebg from "./pictures/homebg.jpg";


const Navbar = () => {
const [nav, setNav] = useState(false)
  return (
    <div className='w-full bg-white fixed top-0 z-[1000]'>
        <div className='flex justify-between w-full font-Montserrat'>

            {/* Left Side */}
                <div className='flex ml-16 mr-5  w-full'>
                    <Link to='/'>
                        <p className='text-3xl font-extrabold hover:scale-105 ease-linear transition-all duration-150 mt-3.5 mb-3'> MIKEY EQUIPMENTS </p>
                    </Link>
                </div>

            {/* Right Side */}
                <div className="flex  w-full justify-end mt-[1rem]">

                      
                    <div className='mr-[3rem]  mt-1'>
                        <p className=' cursor-pointer text-md hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        Home</p>
                    </div> 

                    <div className=' mr-[3rem] mt-1'>
                        <p className=' cursor-pointer text-md hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        Offers</p>
                    </div> 

                    <div className=' mr-[3rem] mt-1'>
                        <p className=' cursor-pointer text-md hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        Review</p>
                    </div> 

                    <Link to="/">
                            <div className="flex justify-end z-10
                            mr-[3rem] ">
                                
                                <MdShoppingCart className='text-[#333333]  hover:text-[cyan]
                        hover: ease-linear transition-all duration-150' size={30}/>

                                {/* <button className="hidden md:inline">Drop a CV</button> */}
                            </div>
                    </Link>  

                </div>
                
               
        </div>

                      {/* <div className='content-between border-b-[1px] w-full mt-1 mb-[0.2rem]'></div> */}

    </div>
  )
}

export default Navbar
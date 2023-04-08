import {React, useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import {RiArrowDownSLine} from 'react-icons/ri'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

import Mainlogo from "./pictures/Mainlogo.png";
import homebg from "./pictures/homebg.jpg";


const Navbar = () => {
const [nav, setNav] = useState(false)
  return (
    <div className='w-full bg-white fixed top-0 z-[1000]'>
        <div className='flex justify-between w-full font-Montserrat'>

            {/* Left Side */}
                <div className='flex ml-16 mr-5 mt-5  w-full'>
                    <Link to='/'>
                        <img className='w-[3rem] lg:w-[3rem] mb-1
                        hover:scale-110 ease-linear transition-all duration-150
                        ' src={Mainlogo} alt="Company Logo" />
                    </Link>

                    
                    <div className='mr-[3rem] mt-2.5 ml-10'>
                        <p className=' cursor-pointer hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        Shepherd Jobs</p>
                    </div> 

                    <div className=' mr-[3rem] mt-2.5 '>
                        <p className=' cursor-pointer hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        CV Builder</p>
                    </div>

                    <div className=' mr-[3rem] mt-2.5'>
                        <p className=' cursor-pointer hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        Consulting Marketplace</p>
                    </div>
                </div>

            {/* Right Side */}
                <div className="flex  w-full justify-end mt-[1.5rem]">

                      
{/* 
                    <div className='mr-[3rem] mt-1 '>
                        <p className=' cursor-pointer hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        Vacancies</p>
                    </div> 

                    <div className=' mr-[3rem] mt-1 '>
                        <p className=' cursor-pointer hover:text-[cyan]
                        hover: ease-linear transition-all duration-150'>
                        Privacy Policy</p>
                    </div> */}

                    <Link to="/">
                            <div className="flex justify-end z-10
                            mr-[3rem] ">
                                <text className='py-1.5 px-8 bg-[white] rounded-full text-black text-center cursor-pointer
                                shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
                                hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>
                                Login / Register </text>
                                {/* <button className="hidden md:inline">Drop a CV</button> */}
                            </div>
                    </Link>  

                </div>
                
               
        </div>

                      <div className='content-between border-b-[1px] w-full mt-1 mb-[0.2rem]'></div>

    </div>
  )
}

export default Navbar
import {React, useState} from 'react'

import { Link, useNavigate } from 'react-router-dom'

import {RiArrowDownSLine} from 'react-icons/ri'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'

import Mainlogo from "./pictures/Mainlogo.png";
import homebg from "./pictures/homebg.jpg";


const Navbar = () => {
const [nav, setNav] = useState(false)
  return (
    <div className='w-full'>
        <div className='flex justify-between w-full'>

            {/* Left Side */}
                <div className='flex ml-5 xl:ml-16 mr-2 md:mr-5 mt-5'>
                    <Link to='/'>
                        <img className='w-[3rem] lg:w-[3rem] py-1
                        hover:scale-110 ease-linear transition-all duration-150
                        ' src={Mainlogo} alt="Company Logo" />
                    </Link>
                </div>

            {/* Right Side */}
                <div className="flex text-xs font-bold w-full justify-end mt-[2rem]">

                      

                    <div className='mr-[3rem] md:mt-2 '>
                        <p className='text-xs text-white cursor-pointer hover:text-[cyan]
                        hover:shadow-lg ease-linear transition-all duration-150'>
                        Vacancies</p>
                    </div> 

                    <div className=' mr-[3rem] md:mt-2 '>
                        <p className='text-xs text-white cursor-pointer hover:text-[cyan]
                        hover:shadow-lg ease-linear transition-all duration-150'>
                        Privacy Policy</p>
                    </div>

                    <Link to="/">
                            <div className="flex justify-end z-10
                            mr-[3rem] md:mt-0 ">
                                <text className='py-2 px-10 text-xs font-bold bg-[white] rounded-full text-black text-center cursor-pointer
                                shadow-[rgba(0,_0,_0,_0.18)_0px_2px_5px] border-[1px] border-[black]
                                hover:shadow-lg hover:text-[white] hover:border-[white] hover:border-1 border-1 hover:bg-black ease-linear transition-all duration-150'>
                                Drop a CV </text>
                                {/* <button className="hidden md:inline">Drop a CV</button> */}
                            </div>
                    </Link>  

                </div>
                
                <div className=''>
                    <img className='absolute w-full h-full -z-10 left-0 top-0 brightness-50' src={homebg} alt="homebg" />
                </div>
        </div>



    </div>
  )
}

export default Navbar
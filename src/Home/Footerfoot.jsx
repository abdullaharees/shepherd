import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Mainlogo from "../pictures/Mainlogo.png";

import {BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {TfiLinkedin} from 'react-icons/tfi'
import {FaWhatsapp} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'

const Footerfoot = () => {


  return (
    <div className=' flex flex-col justify-center w-full '>

        <div className='flex justify-center'>
            <div className='content-between border-b-[1px] w-[95%] mt-2 mb-5'></div>
        </div>

        <div className='flex justify-center  mt-2.5 space-x-[8rem] mb-5'>
            <div>
                    <Link to='/'>
                        <img className='w-[3rem] lg:w-[3rem] mb-1
                        hover:scale-110 ease-linear transition-all duration-150
                        ' src={Mainlogo} alt="Company Logo" />
                    </Link>
            </div>

            <div className='flex text-center mt-3'>
                <p className='text-[#494949] text-[0.6rem] xl:text-sm mr-1 text-center'>
                    © 2023 All rights reserved by Shepherd Consultancy Limited. Designed & Developed by Abdulla Harees
                </p>
            </div>

            <div className='flex mr-1 xl:mr-4 items-center space-x-3'>
                <div className='bg-[white] text-[#414042] hover:text-white hover:bg-[#414042] border-[#414042] border-[1px] px-3 py-3 flex rounded-full cursor-pointer'>
                    <FaFacebookF className=' cursor-pointer text-[1rem] xl:text-[1.3rem]'/>
                </div>

                <button className='bg-[white] text-[#414042] hover:text-white hover:bg-[#414042] border-[#414042] border-[1px] px-3 py-3 flex rounded-full cursor-pointer'>
                    <BsTwitter className=' cursor-pointer text-[1rem] xl:text-[1.3rem]'/>
                </button>

                <button className='bg-[white] text-[#414042] hover:text-white hover:bg-[#414042] border-[#414042] border-[1px] px-3 py-3 flex rounded-full cursor-pointer'>
                    <BsInstagram className=' cursor-pointer text-[1rem] xl:text-[1.3rem]'/>
                </button>

                <button className='bg-[white] text-[#414042] hover:text-white hover:bg-[#414042] border-[#414042] border-[1px] px-3 py-3 flex rounded-full cursor-pointer'>
                    <TfiLinkedin className=' cursor-pointer text-[1rem] xl:text-[1.3rem]' />
                </button>

            </div>
        </div>


    </div>
  )
}

export default Footerfoot

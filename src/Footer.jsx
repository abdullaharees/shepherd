import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center mt-10 mb-5'>    
      <div className='flex w-[85%] justify-between'>
        <div className='flex flex-col space-y-3'>
          <p className='font-semibold'>About us</p>
          <p>Services</p>
          <p>Projects</p>
          <p>Our Team</p>
          <p>Contact Us</p>
          <p>Blog</p>
          <p>Testimonials</p>
          <p>FAQ</p>
        </div>

        <div className='flex flex-col space-y-3'>
          <p className='font-semibold'>Contact Information</p>
          <p>Best Camping Company 2019</p>
          <p>Kuwait Salmiya Block 12 Nasser Al Bader Street</p>
          <p>5353 Road Avenue</p>
          <p>99 4525 60</p>

        </div>
      
        <div className='flex flex-col space-y-3'>
          <p className='font-semibold'>Mikey Equipments Limited</p>
          <p>Mission Vision Values</p>
          <p>Team</p>
          <p>News</p>
        </div>
        
        <div className='flex flex-col space-y-3'>
          <p className='font-semibold'>Quick Links</p>
          <p>Contact Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

    </div>
  )
}

export default Footer

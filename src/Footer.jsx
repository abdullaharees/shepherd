import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center mt-10 mb-5'>    
      <div className='flex w-[85%] justify-between'>
        <div className='flex flex-col space-y-3'>
          <p className='font-semibold'>Services</p>
          <p>Talent</p>
          <p>Advisory</p>
          <p>Youth</p>
          <p>Coaching</p>
          <p>Inspire</p>
          <p>Insight</p>
        </div>

        <div className='flex flex-col space-y-3'>
          <p className='font-semibold'>Solutions</p>
          <p>Empower Jobs</p>
          <p>CV Builder</p>
          <p>Consulting Marketplace</p>
          <p>#TheMovement</p>
        </div>
      
        <div className='flex flex-col space-y-3'>
          <p className='font-semibold'>Empower Limited</p>
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

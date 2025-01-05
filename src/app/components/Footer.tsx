import React from 'react'
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>

        <h1 className=' text-lg md:text-2xl font-bold'>Hodisan Mihai</h1>

        <p className='mt-4 md:mt-0 text-xs'>© 2025 | All rights reserved</p>

        <div className="flex space-x-6 mt-4">
    <a href="#" className="transform transition-transform hover:scale-125 hover:text-[#0077b5]"> 
        <FaLinkedin size={24} /> 
    </a>
    <a href="#" className="transform transition-transform hover:scale-125 hover:text-[#8a3ab9]"> 
        <FaInstagram size={24} /> 
    </a>
    <a href="#" className="transform transition-transform hover:scale-125 hover:text-[#3b5998]"> 
        <FaFacebook size={24} /> 
    </a>
</div>

        
    </div>
  )
}

export default Footer
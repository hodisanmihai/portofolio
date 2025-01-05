
import React from 'react'
import Image from 'next/image'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'

const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 md:mt-6'>
        
        <div className='flex justify-center items-center' id='contact'>
            <ul className='space-y-4'>
                <a href='tel:0742592669' className='flex items-center transform transition-transform hover:scale-110'>
                    <Image src={phone} alt='phone' className='h-[110px] w-auto mr-6'/>
                    <p className='text-xl'>0742-592-669</p>
                </a>
                <a href='mailto:mihaihodisan@gmail.com'  className='flex items-center transform transition-transform hover:scale-110'>
                    <Image src={mail} alt='email' className='h-[110px] w-auto mr-6'/>
                    <p className='text-xl' >mihaihodisan@gmail.com</p>
                </a>
            </ul>
        </div>

        <div className='bg-white/10 p-6 rounded-xl max-w-[550px]'>
        <h2 className='text-5xl font-bold text-orange-400 mb-4'>Let's connect</h2>
        <p className='text-white/70 mb-6'>Send me a message and lets schedule a call</p>
        <form action="https://formspree.io/f/xqaaglqo" method='POST' className='space-y-4'>

            <div className='grid md:grid-cols-2 gap-4 '>
                <input type="text" name='name' className='w-full md:w-[500px] bg-black/70 rounded-xl p-3 focus: outline-none focus:ring-2 focus:ring-orange-400' placeholder='First Name'/>
            </div>
            <div>
                <input type="text" name='name' className='w-full md:w-[500px] bg-black/70 rounded-xl p-3 focus: outline-none focus:ring-2 focus:ring-orange-400' placeholder='Last Name'/>
            </div>
            <div>
                <input type='email' name='email' className='w-full md:w-[500px] bg-black/70 rounded-xl p-3 focus: outline-none focus:ring-2 focus:ring-orange-400' placeholder='Email'/>
            </div>
            <div>
                <input type='number' name='phone' className='w-full md:w-[500px] bg-black/70 rounded-xl p-3 focus: outline-none focus:ring-2 focus:ring-orange-400' placeholder='Phone'/>
            </div>
            <textarea className='w-full md:w-[500px] bg-black/70 rounded-xl p-3 focus: outline-none focus:ring-2 focus:ring-orange-400' placeholder='Your Message'/>
            <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Send Message</button>

        </form>

        </div>

    </div>
  )
}

export default Contact
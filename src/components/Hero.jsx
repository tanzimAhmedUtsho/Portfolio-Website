
import React from 'react'
import { FaDownload, FaFacebook } from 'react-icons/fa'
import { FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { FaSquareXTwitter } from "react-icons/fa6";
import profile from "../assets/profile.png"

const Hero = () => {
  return (
    <section className='h-max md:h-screen bg-gradient-to-l bg-gray-950 text-white flex flex-col justify-center items-center relative z-10 pb-10'>
      <div className='max-w-7xl mt-24 mx-auto items-center flex flex-col md:flex-row gap-16 md:gap-40 justify-between'>
        <div className='md:space-y-6 px-4'>
          <h1 className='md:text-6xl text-4xl font-bold mb-4'>Hi 👋, I'm <p className='text-blue-400'>Tanzim Ahmed</p></h1>
          <p className='md:text-2xl text-lg mb-3'>Frontend Developer </p>
          <p className='lg:w-[600px] mb-4 md:mb-0 text-sm text-gray-300'>A passionate Frontend Developer with a love for creating beautiful, responsive, and user-friendly web experiences. I specialize in turning ideas into interactive and visually appealing websites that not only look great but also function seamlessly across all devices !</p>
         <button className='px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]'> <FaDownload/> Download CV</button>
         <div className='flex gap-3 text-2xl transition-all mt-5 md:mt-0'>
          <FaFacebook className='hover:text-blue-400'/>
          <FaInstagram className='hover:text-blue-400'/>
          <FaLinkedin className='hover:text-blue-400'/>
          <FaSquareXTwitter className='hover:text-blue-400'/>
         </div>
        </div>
        <div className='relative group'>
          <img src={profile}  alt="" className='rounded-full border border-blue-600 md:w-[500px] w-[300px] shadow-[0px_0px_20px_10px-rgb(0,0,0,0.3)] shadow-blue-500' />
        </div>
      </div>
    </section>
  )
}

export default Hero


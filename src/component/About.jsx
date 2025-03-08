import React from 'react'
import gradent from '../assets/Images/Gradient.png'
import profileImg from '../assets/Images/image 1.png'
import arrow from '../assets/Images/Arrow.png'
import { LiaDownloadSolid } from "react-icons/lia";
export const About = () => {
  return (
    <div className='text-white flex flex-col lg:flex-row justify-between gap-40 mt-10'>

        <div className='relative w-full'>
         <img src={gradent} alt="" className=''/>

         <img className='absolute top-22 left-20 md:left-25' src={profileImg} alt="" />

         <img className='absolute top-3 md:top-10 left-[180px] md:left-[300px]' src={arrow} alt="" />

         <a className='absolute top-9 md:top-15 left-[240px] md:left-[410px] text-[17px] md:text-2xl' href="">Hi I am <span className='text-[#7127BA]'>Thison Rooban J</span></a>
        </div>

        <div className='w-full flex flex-col gap-5 justify-center'>
            <p className=' text-3xl :text-5xl'>I'm a Software Engineer.</p>
            <p className='text-justify text-violet-900'>I am an aspiring Java Full-Stack Developer.</p>
            <a href='' className='flex justify-start p-1'>Download CV  <LiaDownloadSolid className='h-6 w-6 inline-block ml-2 animate-bounce'/></a>
        </div>


    </div>
  )
}

import React from 'react'
import gradent from '../assets/Images/Gradient.png'
import profileImg from '../assets/Images/image 1.png'
import arrow from '../assets/Images/Arrow.png'
import bg from '../assets/Images/bg.png'
import { LiaDownloadSolid } from "react-icons/lia";
import blackhole from '../assets/video/black.mp4'

export const About = () => {
  return (
    <div className='text-white flex flex-col lg:flex-row items-center gap-40 relative z-200'>

        <div className='relative w-full z-200 mt-25'>
         <img src={gradent} alt="" className=''/>

         <img className='absolute top-22 left-20 md:left-25' src={profileImg} alt="" />

         <img className='absolute top-3 md:top-10 left-[180px] md:left-[300px]' src={arrow} alt="" />

         <a className='absolute top-9 md:top-15 left-[240px] md:left-[410px] xl:left-[360px] text-[17px] md:text-2xl' href="">Hi I am <span className='text-[#7127BA]'>Thison Rooban J</span></a>
        </div>

        <div className=' flex flex-col gap-5 mt-15 w-full relative z-100'>
            {/* <p className=' text-3xl xl:text-5xl'>I'm a Software Engineer.</p> */}
            <p className='text-justify xl:text-2xl text-violet-900'>I am an aspiring Java Full-Stack Developer.</p>
            <a href='' className='flex justify-start p-1'>Download CV  <LiaDownloadSolid className='h-6 w-6 inline-block ml-2 animate-bounce'/></a>
        </div>



        <video className='absolute top-[-350px]  left-0 z-[1] rotate-180 h-[840px] w-full object-cover' autoPlay loop muted src={blackhole}></video>
    </div>
  )
}

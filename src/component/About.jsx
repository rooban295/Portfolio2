import React from 'react'
import gradent from '../assets/Images/Gradient.png'
import profileImg from '../assets/Images/image 1.png'
import arrow from '../assets/Images/Arrow.png'
import { LiaDownloadSolid } from "react-icons/lia";
import blackhole from '../assets/video/black.mp4'
import resume from '../assets/pdf/2024_BSC(CS)_JAVA_FULLSTACK_THISONROOBAN J.pdf'
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export const About = () => {
  return (
    <div id='about' className='text-white flex flex-col lg:flex-row items-center gap-10 xl:gap-40 relative z-200'>


        <div className='relative w-full z-200 mt-45 xl:mt-25'>
         <img src={gradent} alt="" className=''/>

         <img className='absolute top-22 left-20 md:left-25' src={profileImg} alt="" />

         <img className='absolute top-3 md:top-10 left-[180px] md:left-[300px]' src={arrow} alt="" />

         <a className='absolute top-9 md:top-15 left-[240px] md:left-[410px] xl:left-[360px] text-[17px] md:text-2xl' href="">Hi I am <span className='text-[#7127BA]'>Thison Rooban J</span></a>
        </div>


        <div className=' flex flex-col gap-5 xl:mt-15 w-full relative z-100 px-2'>
            <p className='text-justify xl:text-3xl text-violet-900'>I am an aspiring Java Full-Stack Developer.</p>
            <div className='flex'>
            <a href={resume} target="_blank" className=''>Download CV  <LiaDownloadSolid className='h-5 w-5 inline-block ml-2 animate-bounce'/></a>
            <a href="https://www.linkedin.com/in/roobanj/" target='_blank' className='ml-5'>Linkedin<CiLinkedin className='inline-block h-5 w-5 ml-2 animate-bounce'/></a>
            <a href="https://github.com/rooban295?tab=repositories" target='_blank' className='ml-5'>GitHub<FaGithub className='inline-block h-5 w-5 ml-2 animate-bounce'/></a>
            </div>
        </div>



        <video className='absolute top-[-350px]  left-0 z-[1] rotate-180 h-[840px] w-full object-cover' autoPlay loop muted src={blackhole}></video>
    </div>
  )
}

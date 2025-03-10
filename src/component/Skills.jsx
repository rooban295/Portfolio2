import React from 'react'
import frame from '../assets/Images/Frame 1939.png'
import blackhole from '../assets/Images/cards-video.mp4'
import { FaReact } from "react-icons/fa";
import { RiHtml5Line } from "react-icons/ri";
import { TbBrandCss3 } from "react-icons/tb";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPostman } from "react-icons/si";

import eclipse from '../assets/Images/Default copy.png'
import intellij from '../assets/Images/Default.png'

export const Skills = () => {
  return (
  <section>
    <div className='flex justify-center mt-20 xl:mt-50 w-full relative'>
        <video className='opacity-80 w-full object-center' autoPlay loop muted src={blackhole}></video>
            <FaReact  className='absolute top-10 left-18 h-6 w-6 sm:h-8 sm:w-8 sm:left-40 md:h-10 md:w-10 md:top-10 md:left-15 lg:h-15 lg:w-15 lg:top-15 lg:left-50 xl:top-35 xl:left-100 xl:h-15 xl:w-15 text-blue-400 animate-spin transition duration-1000 ease-in-out'/>
            <FaHtml5 className='absolute top-10 left-28 h-6 w-6 sm:h-8 sm:w-8 sm:left-52 md:h-10 md:w-10 md:top-10 md:left-40 text-red-800 lg:h-15 lg:w-15 lg:top-15 lg:left-75  xl:top-35 xl:left-130 xl:h-15 xl:w-15 animate-bounce'/>
            <IoLogoCss3 className='absolute top-10 left-38 h-6 w-6 sm:h-8 sm:w-8 sm:left-66 md:h-10 md:w-10 md:top-10 md:left-70 text-blue-500 lg:h-15 lg:w-15 lg:top-15 lg:left-100 xl:top-35 xl:left-160 xl:h-15 xl:w-15 animate-bounce'/>
            <IoLogoJavascript className='absolute top-10 left-48 h-6 w-6 sm:h-8 sm:w-8 sm:left-80 md:h-10 md:w-10 md:top-10 md:left-100 text-yellow-500 lg:h-15 lg:w-15 lg:top-15 lg:left-120 xl:top-35 xl:left-190 xl:h-15 xl:w-15 animate-bounce delay-1000'/>
            <RiBootstrapLine className='absolute top-10 left-60 h-6 w-6 sm:h-8 sm:w-8 sm:left-95 md:h-10 md:w-10 md:top-10 md:left-130 text-violet-900 lg:h-15 lg:w-15 lg:top-15 lg:left-145 xl:top-35 xl:left-220 xl:h-15 xl:w-15 animate-bounce delay-1000'/>
            <RiTailwindCssLine className='absolute top-10 left-72 h-6 w-6 sm:h-8 sm:w-8 sm:left-110 md:h-10 md:w-10 md:top-10 md:left-160 text-blue-500 lg:h-15 lg:w-15 lg:top-15 lg:left-170 xl:top-35 xl:left-260 xl:h-15 xl:w-15 animate-bounce delay-1000'/>

            <FaJava className='absolute h-6 w-6 top-20 left-28 sm:h-8 sm:w-8 sm:left-50 md:h-10 md:w-10 md:top-30 md:left-40 text-white lg:h-15 lg:w-15 lg:top-35 lg:left-70 xl:top-60 xl:left-120 xl:h-15 xl:w-15 animate-bounce delay-1000'/>
            <SiSpringboot className='absolute h-6 w-6 top-20 left-40 sm:h-8 sm:w-8 sm:left-63 md:h-10 md:w-10 md:top-30 md:left-75 text-green-700 lg:h-15 lg:w-15 lg:top-35 lg:left-100 xl:top-60 xl:left-160 xl:h-15 xl:w-15 animate-bounce delay-1000'/>
            <FaGithub className='absolute h-6 w-6 top-20 left-53 sm:h-8 sm:w-8 sm:left-80 md:h-10 md:w-10 md:top-30 md:left-110 text-white lg:h-15 lg:w-15 lg:top-35 lg:left-125 xl:top-60 xl:left-200  xl:h-15 xl:w-15 animate-bounce delay-1000'/>
            <GrMysql className='absolute h-6 w-6 top-20 left-65 sm:h-8 sm:w-8 sm:left-95 md:h-10 md:w-10 md:top-30 md:left-140 text-blue-600 lg:h-15 lg:w-15 lg:top-35 lg:left-150 xl:top-60 xl:left-240 xl:h-15 xl:w-15 animate-bounce delay-1000'/>


            <SiPostman  className='absolute h-6 w-6 top-30 left-38 sm:h-8 sm:w-8 sm:left-60 md:h-10 md:w-10 md:top-50 md:left-65 text-orange-500 lg:h-15 lg:w-15 lg:top-55 lg:left-90 xl:top-87 xl:left-137 xl:h-15 xl:w-15 animate-bounce delay-1000'/>
            <img src={eclipse}  className='absolute  h-6 w-6 top-30 sm:h-8 sm:w-8 left-48 sm:left-75 md:h-10 md:w-10 md:top-50 md:left-96 text-violet-900 lg:h-15 lg:w-15 lg:top-55 lg:left-115 xl:top-87 xl:left-175 xl:h-15 xl:w-15 animate-bounce delay-1000'/>
            <img src={intellij}  className='absolute h-6 w-6 top-30 sm:h-8 sm:w-8 left-58 md:h-10 md:w-10 md:top-50 md:left-130 sm:left-88 text-violet-900 lg:h-15 lg:w-15 lg:top-55 lg:left-135  xl:top-87 xl:left-210 xl:h-15 xl:w-15 animate-bounce delay-1000'/>
    </div>
    </section>
    
  )
}

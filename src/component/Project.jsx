import React from 'react'
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import gradent from '../assets/Images/Gradient.png';
import ecom from '../assets/Images/Screenshot (112).png'
import emp from '../assets/Images/Screenshot (113).png'
import weather from '../assets/Images/Screenshot (114).png'
import nike from '../assets/Images/Screenshot (117).png'
import vir from '../assets/Images/Screenshot (118).png'
import edu from '../assets/Images/Screenshot (119).png'
import { LuArrowRight } from "react-icons/lu";


export const Project = () => {
  return (
       <div className='relative timeline mt-20 w-full mx-auto'>

         <h1 className='text-center text-white relative z-100 text-3xl xl:text-4xl mb-25 tracking-wide'>Projects</h1>




            <div className='relative  w-full text-white flex max-lg:justify-center xl:pl-49 gap-13 mb-40 '>

             <div className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:p-5 relative z-100'>
                <img src={ecom} alt="" className='w-full rounded-lg lg:rounded-xl h-full relative z-50 md:w-[500px] lg:w-[440px] xl:w-[470px]'/>
                <div className='lg:hidden'>
                  <h1>E-commerce</h1>
                  <a href=""></a>
                </div>
             </div>

             <span className='h-0 w-0  absolute top-15 left-[165px] sm:left-[290px] md:left-[315px] xl:top-29 lg:left-109 lg:top-29 xl:left-171 z-50 border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-l-[15px]'></span>


             <span class="absolute top-17 left-[180px] sm:left-[310px] md:left-[335px] lg:top-30 lg:left-[50%] xl:left-[50%] size-3 md:size-4 z-100 hidden lg:block">
               <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-700 opacity-75"></span>
               <span class="relative inline-flex size-3 md:size-4 rounded-full bg-violet-950 "></span>
               </span>


              <img className='absolute h-[310px] top-[-50px] left-[50px] lg:h-[600px] lg:w-[700px] xl:left-[-30px] lg:top-[-180px] animate-pulse' src={gradent} alt="" />


               <div className='w-full md:w-[380px] xl:w-[400px] my-auto hidden lg:block'>
               <p className='text-lg sm:text-2xl lg:text-xl'>E-commerce</p>
                  <span className='text-violet-700 text-[12px] sm:text-lg md:text-sm'>Dec-2024 - Jan 2025</span>
                  <div className='hidden md:block text-justify bg-white/6 p-4 rounded-lg backdrop-saturate-120'>
                      <p className='text-[12px] md:text-sm w-full'>Developed a secure, scalable E-commerce website</p>
                  </div>
                 <a href='' className='p-1 mt-2 block w-fit hover:text-violet-800 text-[12px] sm:text-md md:text-lg lg:text-sm'>View Project <LuArrowRight className='inline-block '/></a>
               </div>

            </div>

            {/* ---------------------------------------------------------------------------------------- */}

            <div className='relative  w-full text-white flex max-lg:justify-center gap-13 lg:pl-15 xl:pl-70 mb-40 '>

            <div className='w-full md:w-[380px] xl:w-[400px] my-auto hidden lg:block'>
  <p className='text-lg sm:text-2xl lg:text-xl'>E-commerce</p>
     <span className='text-violet-700 text-[12px] sm:text-lg md:text-sm'>Dec-2024 - Jan 2025</span>
     <div className='hidden md:block text-justify bg-white/6 p-4 rounded-lg backdrop-saturate-120'>
         <p className='text-[12px] md:text-sm w-full'>Developed a secure, scalable E-commerce website</p>
     </div>
    <a href='' className='p-1 mt-2 block w-fit hover:text-violet-800 text-[12px] sm:text-md md:text-lg lg:text-sm'>View Project <LuArrowRight className='inline-block '/></a>
  </div>

<div className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:p-5 relative z-100 '>
   <img src={emp} alt="" className='w-full rounded-lg lg:rounded-xl h-full relative z-50 md:w-[500px] lg:w-[440px] xl:w-[470px]'/>
   <div className='lg:hidden'>
     <h1>E-commerce</h1>
   </div>
</div>

<span className='h-0 w-0  absolute top-15 left-[165px] sm:left-[290px] md:left-[315px] xl:top-29 lg:left-120 lg:top-29 xl:left-186 z-50 border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-r-[15px]'></span>


<span class="absolute top-17 left-[180px] sm:left-[310px] md:left-[335px] lg:top-30 lg:left-[455px] xl:left-[710px] size-3 md:size-4 z-100 hidden lg:block">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-700 opacity-75"></span>
  <span class="relative inline-flex size-3 md:size-4 rounded-full bg-violet-950 "></span>
  </span>


 <img className='absolute h-[310px] top-[-50px] left-[50px] lg:h-[600px] lg:w-[700px] xl:left-150 lg:top-[-180px] animate-pulse' src={gradent} alt="" />


</div>

<div className='relative  w-full text-white flex max-lg:justify-center xl:pl-49 gap-13 mb-40 '>

<div className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:p-5 relative z-100'>
   <img src={weather} alt="" className='w-full rounded-lg lg:rounded-xl h-full relative z-50 md:w-[500px] lg:w-[440px] xl:w-[470px]'/>
   <div className='lg:hidden'>
     <h1>E-commerce</h1>
   </div>
</div>

<span className='h-0 w-0  absolute top-15 left-[165px] sm:left-[290px] md:left-[315px] xl:top-29 lg:left-109 lg:top-29 xl:left-171 z-50 border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-l-[15px]'></span>


<span class="absolute top-17 left-[180px] sm:left-[310px] md:left-[335px] lg:top-30 lg:left-[455px] xl:left-[710px] size-3 md:size-4 z-100 hidden lg:block">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-700 opacity-75"></span>
  <span class="relative inline-flex size-3 md:size-4 rounded-full bg-violet-950 "></span>
  </span>


 <img className='absolute h-[310px] top-[-50px] left-[50px] lg:h-[600px] lg:w-[700px] xl:left-[-30px] lg:top-[-180px] animate-pulse' src={gradent} alt="" />


  <div className='w-full md:w-[380px] xl:w-[400px] my-auto hidden lg:block'>
  <p className='text-lg sm:text-2xl lg:text-xl'>E-commerce</p>
     <span className='text-violet-700 text-[12px] sm:text-lg md:text-sm'>Dec-2024 - Jan 2025</span>
     <div className='hidden md:block text-justify bg-white/6 p-4 rounded-lg backdrop-saturate-120'>
         <p className='text-[12px] md:text-sm w-full'>Developed a secure, scalable E-commerce website</p>
     </div>
    <a href='' className='p-1 mt-2 block w-fit hover:text-violet-800 text-[12px] sm:text-md md:text-lg lg:text-sm'>View Project <LuArrowRight className='inline-block '/></a>
  </div>

</div>



<h1 className='text-center text-white text-2xl relative z-100 mb-40'>Landing Pages</h1>


<div className='relative  w-full text-white flex max-lg:justify-center gap-13 lg:pl-15 xl:pl-70 mb-40 '>

<div className='w-full md:w-[380px] xl:w-[400px] my-auto hidden lg:block'>
<p className='text-lg sm:text-2xl lg:text-xl'>E-commerce</p>
<span className='text-violet-700 text-[12px] sm:text-lg md:text-sm'>Dec-2024 - Jan 2025</span>
<div className='hidden md:block text-justify bg-white/6 p-4 rounded-lg backdrop-saturate-120'>
<p className='text-[12px] md:text-sm w-full'>Developed a secure, scalable E-commerce website</p>
</div>
<a href='' className='p-1 mt-2 block w-fit hover:text-violet-800 text-[12px] sm:text-md md:text-lg lg:text-sm'>View Project <LuArrowRight className='inline-block '/></a>
</div>

<div className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:p-5 relative z-100 '>
<img src={nike} alt="" className='w-full rounded-lg lg:rounded-xl h-full relative z-50 md:w-[500px] lg:w-[440px] xl:w-[470px]'/>
<div className='lg:hidden'>
<h1>E-commerce</h1>
</div>
</div>

<span className='h-0 w-0  absolute top-15 left-[165px] sm:left-[290px] md:left-[315px] xl:top-29 lg:left-120 lg:top-29 xl:left-186 z-50 border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-r-[15px]'></span>


<span class="absolute top-17 left-[180px] sm:left-[310px] md:left-[335px] lg:top-30 lg:left-[455px] xl:left-[710px] size-3 md:size-4 z-100 hidden lg:block">
<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-700 opacity-75"></span>
<span class="relative inline-flex size-3 md:size-4 rounded-full bg-violet-950 "></span>
</span>


<img className='absolute h-[310px] top-[-50px] left-[50px] lg:h-[600px] lg:w-[700px] xl:left-150 lg:top-[-180px] animate-pulse' src={gradent} alt="" />


</div>


<div className='relative  w-full text-white flex max-lg:justify-center xl:pl-49 gap-13 mb-40 '>

<div className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:p-5 relative z-100'>
   <img src={vir} alt="" className='w-full rounded-lg lg:rounded-xl h-full relative z-50 md:w-[500px] lg:w-[440px] xl:w-[470px]'/>
   <div className='lg:hidden'>
     <h1>E-commerce</h1>
   </div>
</div>

<span className='h-0 w-0  absolute top-15 left-[165px] sm:left-[290px] md:left-[315px] xl:top-29 lg:left-109 lg:top-29 xl:left-171 z-50 border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-l-[15px]'></span>


<span class="absolute top-17 left-[180px] sm:left-[310px] md:left-[335px] lg:top-30 lg:left-[455px] xl:left-[710px] size-3 md:size-4 z-100 hidden lg:block">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-700 opacity-75"></span>
  <span class="relative inline-flex size-3 md:size-4 rounded-full bg-violet-950 "></span>
  </span>


 <img className='absolute h-[310px] top-[-50px] left-[50px] lg:h-[600px] lg:w-[700px] xl:left-[-30px] lg:top-[-180px] animate-pulse' src={gradent} alt="" />


  <div className='w-full md:w-[380px] xl:w-[400px] my-auto hidden lg:block'>
  <p className='text-lg sm:text-2xl lg:text-xl'>E-commerce</p>
     <span className='text-violet-700 text-[12px] sm:text-lg md:text-sm'>Dec-2024 - Jan 2025</span>
     <div className='hidden md:block text-justify bg-white/6 p-4 rounded-lg backdrop-saturate-120'>
         <p className='text-[12px] md:text-sm w-full'>Developed a secure, scalable E-commerce website</p>
     </div>
    <a href='' className='p-1 mt-2 block w-fit hover:text-violet-800 text-[12px] sm:text-md md:text-lg lg:text-sm'>View Project <LuArrowRight className='inline-block '/></a>
  </div>

</div>


<div className='relative  w-full text-white flex max-lg:justify-center gap-13 lg:pl-15 xl:pl-70 mb-40 '>

<div className='w-full md:w-[380px] xl:w-[400px] my-auto hidden lg:block'>
<p className='text-lg sm:text-2xl lg:text-xl'>E-commerce</p>
<span className='text-violet-700 text-[12px] sm:text-lg md:text-sm'>Dec-2024 - Jan 2025</span>
<div className='hidden md:block text-justify bg-white/6 p-4 rounded-lg backdrop-saturate-120'>
<p className='text-[12px] md:text-sm w-full'>Developed a secure, scalable E-commerce website</p>
</div>
<a href='' className='p-1 mt-2 block w-fit hover:text-violet-800 text-[12px] sm:text-md md:text-lg lg:text-sm'>View Project <LuArrowRight className='inline-block '/></a>
</div>

<div className='h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:p-5 relative z-100 '>
<img src={edu} alt="" className='w-full rounded-lg lg:rounded-xl h-full relative z-50 md:w-[500px] lg:w-[440px] xl:w-[470px]'/>
<div className='lg:hidden'>
<h1>E-commerce</h1>
</div>
</div>

<span className='h-0 w-0  absolute top-15 left-[165px] sm:left-[290px] md:left-[315px] xl:top-29 lg:left-120 lg:top-29 xl:left-186 z-50 border-t-[15px] border-t-transparent border-b-transparent border-b-[15px] border-r-[15px]'></span>


<span class="absolute top-17 left-[180px] sm:left-[310px] md:left-[335px] lg:top-30 lg:left-[455px] xl:left-[710px] size-3 md:size-4 z-100 hidden lg:block">
<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-700 opacity-75"></span>
<span class="relative inline-flex size-3 md:size-4 rounded-full bg-violet-950 "></span>
</span>


<img className='absolute h-[310px] top-[-50px] left-[50px] lg:h-[600px] lg:w-[700px] xl:left-150 lg:top-[-180px] animate-pulse' src={gradent} alt="" />


</div>


       </div>
  )
}

import React, { useEffect, useState } from 'react'
import blackhole from '../assets/video/black.mp4'
export const Nav = () => {

    const [navScroll, setNavScroll] = useState(true);
  
    useEffect(() => {
      const handleScroll = () => {
        setNavScroll(window.scrollY <= 50);
      };
    
      // Add scroll event listener
      window.addEventListener('scroll', handleScroll);
    
      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  return (
    <div className={`w-full h-[65px] flex items-center justify-center fixed top-0  z-500  ${navScroll?`nav-scroll`:""}`}>
      <nav  className="bg-transparent">
        <ul className=" flex items-center gap-7 sm:gap-14 md:gap-14  p-3 rounded-full backdrop-blur-md text-white ">
            <li className='cursor-pointer'>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
      </nav>
      </div>
  )
}

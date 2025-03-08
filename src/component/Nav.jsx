import React from 'react'

export const Nav = () => {
  return (
    <div className='flex bg-[#1A0B2E] text-white py-4 justify-between px-10 sticky top-0 z-200'>
        <p>Portfolio</p>
        <ul className='flex gap-10'>
            <li className='cursor-pointer'>About</li>
            <li>Skills</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

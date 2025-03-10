import { useState } from 'react'
import { Nav } from './component/Nav'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Project } from './component/Project'
import { Footer } from './component/Footer'
import { FaReact } from "react-icons/fa";


function App() {

  return (
    <div className='bg-[#080115]'>
    <Nav/>

    <div className=''>
    <About/>
    </div>

    <Skills/>

    <div className='p-1 md:px-10'>
    <Project/>
    </div>

    <Footer/>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Nav } from './component/Nav'
import { About } from './component/About'
import { Skills } from './component/Skills'
import { Project } from './component/Project'
import { Footer } from './component/Footer'
import { FaReact } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#0a0218]'>
    <Nav/>

    <div className='px-2 md:px-10'>
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

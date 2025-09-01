import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

  return <header className="flex justify-between px-5 py-2 bg-secondary sticky top-0 z-50">
    <a className="font-bold text-amber-400" href="#">Zahir</a>
    <nav className="hidden md:block">
        <ul className="flex text-white">
            <li><a href="#Hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
    </nav>
    {toggleMenu && <nav className="block md:hidden mobile-nav">
        <ul className="flex flex-col text-white">
            <li><a href="#Hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
    </nav>}
    <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    
  </header>

}

import { useState } from 'react';
import logo from '../assets/logo.png';
import logo_dark  from '../assets/logo-dark.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from "../components/theme-provider"
import { FaSun, FaMoon } from 'react-icons/fa';
import { Button } from './ui/button';
import { FaHome, FaInfoCircle, FaCogs, FaFolder, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

    const { setTheme,theme } = useTheme();
   console.log(theme);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full dark:text-white">
      <div className="flex justify-between items-center px-4 py-3 lg:px-8">
        <div className="flex lg:w-32 justify-center items-center w-32">
          <img src={theme=='dark'?logo_dark:logo} alt="logo" className="w-48 object-cover h-24" />
        </div>
         <div className="flex lg:hidden gap-5">

            <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant='dark'  size="icon">
      <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaMoon  className="  absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
          </DropdownMenu>
             <button
          className="text-gray-800 text-2xl lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
         </div>
     
      
        <ul className="hidden lg:flex w-3/5 gap-12 justify-center items-center font-semibold ">
   
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
      <FaHome className="mr-2" /> Home
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaInfoCircle className="mr-2" /> À propos
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaCogs className="mr-2" /> Services
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaFolder className="mr-2" /> Ressources
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaCalendarAlt className="mr-2" /> Événements
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaEnvelope className="mr-2" /> Contact
      </p>
    </li>
  </ul>
        
        <div className="hidden lg:flex w-1/6 justify-center items-center space-x-4">
      
           <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant='dark'  size="icon">
      <FaSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FaMoon  className="  absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem onClick={() => setTheme("light")}>
      Light
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("dark")}>
      Dark
    </DropdownMenuItem>
    <DropdownMenuItem onClick={() => setTheme("system")}>
      System
    </DropdownMenuItem>
  </DropdownMenuContent>
          </DropdownMenu>
          {/* Base */}
{/* Base */}
{/* Base */}
         
              <a
  className="text-nowrap group flex items-center justify-between gap-4 rounded-lg border border-[#009B72] bg-[#009B72] px-4 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
  href="#"
>
  <span
    className="font-medium text-white transition-colors group-hover:text-[#009B72] group-active:text-[#007B59]"
  >
    Join us
  </span>


</a>

{/* Border */}

<a
  className="text-nowrap group flex items-center justify-between gap-4 rounded-lg border border-current px-4 py-2 text-[#009B72] transition-colors hover:bg-[#009B72] focus:outline-none focus:ring active:bg-[#007B59]"
  href="#"
>
  <span className="font-medium transition-colors group-hover:text-white">Hire us</span>

 
</a>
            



          {/* <button className="btn btn-outline border-[#009B72] hover:bg-[#009B72] dark:text-[#009B72]  dark:hover:text-white"></button>
          <button className="btn bg-[#009B72] text-white border-none"></button> */}
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 border-t border-gray-200">
       <ul className="space-y-4">
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaHome className="mr-2" /> Home
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaInfoCircle className="mr-2" /> À propos
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaCogs className="mr-2" /> Services
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaFolder className="mr-2" /> Ressources
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaCalendarAlt className="mr-2" /> Événements
      </p>
    </li>
    <li>
      <p className="flex items-center hover:text-[#009B72] dark:hover:text-[#009B72] cursor-pointer">
        <FaEnvelope className="mr-2" /> Contact
      </p>
    </li>
  </ul>

          <div className="flex space-x-4 pt-4">
             
           
              <a
  className="text-nowrap group flex items-center justify-between gap-4 rounded-lg border border-[#009B72] bg-[#009B72] px-4 py-2 transition-colors hover:bg-transparent focus:outline-none focus:ring"
  href="#"
>
  <span
    className="font-medium text-white transition-colors group-hover:text-[#009B72] group-active:text-[#007B59]"
  >
    Join us
  </span>


</a>

{/* Border */}

<a
  className="text-nowrap group flex items-center justify-between gap-4 rounded-lg border border-current px-4 py-2 text-[#009B72] transition-colors hover:bg-[#009B72] focus:outline-none focus:ring active:bg-[#007B59]"
  href="#"
>
  <span className="font-medium transition-colors group-hover:text-white">Hire us</span>

 
</a>
            
          </div>
        </div>
      )}
      
    </nav>
  );
}

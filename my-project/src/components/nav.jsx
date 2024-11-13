import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-white lg:shadow-none shadow-md">
      <div className="flex justify-between items-center px-4 py-3 lg:px-8">
        <div className="flex lg:w-1/6 w-1/2 justify-center items-center">
          <img src={logo} alt="logo" className="h-8" />
        </div>
        <button
          className="text-gray-800 text-2xl lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div className="hidden lg:flex w-3/5 justify-evenly items-center font-semibold">
          <p className="hover:text-gray-700 cursor-pointer">Home</p>
          <p className="hover:text-gray-700 cursor-pointer">À propos</p>
          <p className="hover:text-gray-700 cursor-pointer">Services</p>
          <p className="hover:text-gray-700 cursor-pointer">Ressources</p>
          <p className="hover:text-gray-700 cursor-pointer">Événements</p>
          <p className="hover:text-gray-700 cursor-pointer">Blog</p>
        </div>
        <div className="hidden lg:flex w-1/6 justify-center items-center space-x-4">
          <button className="btn btn-ghost">Join us</button>
          <button className="btn btn-accent">Hire Us</button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center space-y-4 py-4 border-t border-gray-200">
          <p className="hover:text-gray-700 cursor-pointer">Home</p>
          <p className="hover:text-gray-700 cursor-pointer">À propos</p>
          <p className="hover:text-gray-700 cursor-pointer">Services</p>
          <p className="hover:text-gray-700 cursor-pointer">Ressources</p>
          <p className="hover:text-gray-700 cursor-pointer">Événements</p>
          <p className="hover:text-gray-700 cursor-pointer">Blog</p>
          <div className="flex space-x-4 pt-4">
            <button className="btn btn-ghost">Join us</button>
            <button className="btn btn-accent">Hire Us</button>
          </div>
        </div>
      )}
    </nav>
  );
}

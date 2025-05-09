import React from 'react';
import { navItems } from '../data/index';
import 'boxicons/css/boxicons.min.css';

function Navbar({ activePage,  handleNavClick }) {
  return (
    <div className="2xl:w-80 xl:w-52 w-44 h-full bg-[#f8f8f8] flex flex-col justify-between pt-5 pl-6 pb-14 md:pb-0 absolute md:relative">
      <a href="#" className="2xl:text-2xl text-xl font-light text-red-600 mb-14 tracking-wider">
        Art Boutique
      </a>

      <div className="flex flex-col flex-grow">
        {navItems.map((item, index) => (
          <a 
            key={index}
            href="#" 
            className="xl:w-36 lg:w-32 w-30 flex items-center justify-between my-3.5 text-left cursor-pointer"
            onClick={() =>handleNavClick(index)}
          >
            {/* Icône du menu */}
            <i className={`bx ${item.icon} text-xl text-pink-400`}></i>

            {/* Nom du menu */}
            <span className="text-sm text-gray-500 mr-auto mx-2.5 tracking-wider">{item.label}</span>

            {/* Icône active ou inactive */}
            <i className={`bx ${activePage === index ? item.activeIcon : item.inactiveIcon} text-lg text-yellow-400`}></i>
          </a>
        ))}
      </div> 
      <div className='flex justify-between pr-6 pb-2'>
        <a href="">
          <i className='bx bxl-instagram text-red-600'></i>
        </a>
        <a href="">
          <i className='bx bxl-twitter text-red-600'></i>
        </a>
        <a href="">
          <i className='bx bxl-facebook text-red-600'></i>
        </a>
        <a href="">
          <i className='bx bxl-telegram text-red-600'></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

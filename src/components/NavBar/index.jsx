import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Image from '../../lib/ImgComp/Image';
import Icon from '../../lib/IconComp/Icon';
import SideMenu from './Sidemenu'; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);    

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto flex items-center justify-between feat">
        <div className="flex items-center space-x-4">
          <button className="border border-[#FFFFFF] text-white px-4 py-1">إتصل بنا</button>
          <Icon name="iconsearch" size={24} />
        </div>

        <div dir="rtl" className="hidden md:flex justify-center items-center">
          <NavLink 
            to="/" 
            className="text-lg font-medium mx-2 relative nav-link"
            activeClassName="active-link"
          >
            الرئيسية
          </NavLink>
          <NavLink 
            to="whoAreWe" 
            className="text-lg font-medium mx-2 relative nav-link"
            activeClassName="active-link"
          >
            من نحن
          </NavLink>
          <NavLink 
            to="ourservices" 
            className="text-lg font-medium mx-2 relative nav-link"
            activeClassName="active-link"
          >
            خدماتنا
          </NavLink>
          <NavLink 
            to="blog" 
            className="text-lg font-medium mx-2 relative nav-link"
            activeClassName="active-link"
          >
            المدونة
          </NavLink>
        </div>

        <div className="flex items-center">
          <Image name="logo" className="w-[185.71px] h-[70px]" />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center w-8 h-8 border rounded"
          >
            <div className="w-full h-[2px] bg-white" />
            <div className="w-full h-[2px] bg-white my-1" />
            <div className="w-full h-[2px] bg-white" />
          </button>
        </div>
      </div>

      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

export default Navbar;

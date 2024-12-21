import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Image from "../../lib/ImgComp/Image";
import Icon from "../../lib/IconComp/Icon";
import SideMenu from "./Sidemenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const whatsappLink = "https://wa.me/+966539822205";

  const handleButtonClick = () => {
    window.open(whatsappLink, "_blank");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        !event.target.closest(".search-icon")
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-black text-white relative">
      <div className="mx-auto flex items-center justify-between feat">
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={handleButtonClick}
            className="border border-[#FFFFFF] text-white mx-2 px-4 lg:px-6 xl:px-8 py-1 relative overflow-hidden group"
          >
            إتصل بنا
            <span className="absolute inset-0 bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </button>
          <div className="search-icon" onClick={toggleSearch}>
            <span className="cursor-pointer">
              <Icon name="iconsearch" size={24} />
            </span>
          </div>
        </div>

        <div dir="rtl" className="hidden md:flex justify-center items-center">
          <NavLink to="/" className="text-lg font-medium mx-2 relative group">
            الرئيسية
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="aboutUs"
            className="text-lg font-medium mx-2 relative group"
          >
            من نحن
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="services"
            className="text-lg font-medium mx-2 relative group"
          >
            خدماتنا
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink
            to="blog"
            className="text-lg font-medium mx-2 relative group"
          >
            المدونة
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
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

        <div className="flex items-center">
          <Image name="logo" className="w-[185.71px] h-[70px]" />
        </div>
      </div>

      {isSearchOpen && (
        <div className="search-container mt-2 absolute h-[30px] bottom-[-30px]">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="ابحث هنا..."
            className="w-[250px] lg:w-[400px] px-4 py-2 border border-white outline-white rounded bg-[#1D1B20]"
          />
        </div>
      )}

      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

export default Navbar;

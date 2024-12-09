import React, { useState } from 'react';
import backgroundImage from '../../assets/imags/background.svg';
import { Link, NavLink } from 'react-router-dom'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon'
import SideMenu from '../NavBar/Sidemenu';


function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="relative bg-cover bg-center  md:h-screen "
         style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      {/* Overlay Image */}
      <div className="absolute inset-0">
        <Image
          name="layer"
          alt="Overlay"
          className="opacity-100 w-1/2 h-full object-cover"
          style={{ right: 0, position: "absolute" }}
        />
      </div>

      {/* Blur Layer */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-none"></div>

      
      <div className="relative w-full pt-12">
      <div dir="rtl" className="relative bg-cover bg-center">
  
  <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />

  
  <nav className="text-white feat">
    <div className="flex items-center justify-between p-4">
      
      <button
        onClick={toggleMenu}
        className="lg:hidden text-white focus:outline-none text-3xl p-2 border  "
      >
        ☰
      </button>

      
      <div className="hidden lg:block">
        <Image name="logo" className="w-[185.71px] h-[70px]" />
      </div>

      
      <div
        dir="rtl"
        className="hidden lg:flex justify-center items-center gap-4"
      >
        <NavLink to="/" className="text-lg font-medium mx-2">
          الرئيسية
        </NavLink>
        <NavLink to="whoAreWe" className="text-lg font-medium mx-2">
          من نحن
        </NavLink>
        <NavLink to="ourservices" className="text-lg font-medium mx-2">
          خدماتنا
        </NavLink>
        <NavLink to="blog" className="text-lg font-medium mx-2">
          المدونة
        </NavLink>
      </div>

      
      <div className="hidden lg:flex items-center space-x-4">
        <button className="border border-[#FFFFFF] text-white mx-2  px-4 py-1">
          إتصل بنا
        </button>
        <Icon name="iconsearch" size={24} />
      </div>
    </div>
  </nav>
</div>


        <div className="flex items-center justify-between mt-8 md:mt-48 feat">
          <div>
            <Icon name="facebook" className="my-4" size={24} />
            <Icon name="linkedIn" className="my-4" size={24} />
            <Icon name="youtube" className="my-4" size={24} />
            <Icon name="twitter" className="my-4" size={24} />
          </div>

          <div dir="rtl" className="text-white">
            <h3>شركة تعاون</h3>
            <h5>المتطورة لخدمات الأعمال</h5>
            <p>شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم <br /> خدمات للشركات فى كافة القطاعات وكافة الانشطة . </p>

            <div>
              <button>
                
              </button>
              <Link className="bg-[#AC8B2E] inline-block text-white ml-5 my-10 py-1 px-12 ">خدماتنا</Link>
              <Link className="bg-transparent inline-block text-white my-2 md:my-10 py-1 px-12 border border-[#FFFFFF]">تواصل معنا</Link>
            </div>
          </div>
        </div>

        <div dir="rtl" className="flex flex-col md:flex-row items-center text-white feat mt-4 md:mt-24    space-y-4 md:space-y-0">

  <div className="flex items-center space-x-4  w-full md:w-1/3">
    <Icon name="star" className="ml-2" size={24} />
    <div>
      <p>الخبرة</p>
      <p className="text-xs">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
    </div>
  </div>


  <div className="flex items-center space-x-4 w-full md:w-1/3">
    <Icon name="simple" className="ml-2" size={24} />
    <div>
      <p>الخدمة</p>
      <p className="text-xs">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
    </div>
  </div>

  
  <div className="flex items-center space-x-4   w-full md:w-1/3">
    <Icon name="safety" className=" mb-4 mb:mb-0 ml-2" size={24} />
    <div className='mb-4 mb:mb-0'>
      <p>الثقة</p>
      <p className="text-xs">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}


export default Header

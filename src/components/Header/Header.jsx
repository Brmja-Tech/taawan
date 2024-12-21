import React, { useState } from 'react';
import backgroundImage from '../../assets/imags/background.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Image from '../../lib/ImgComp/Image';
import Icon from '../../lib/IconComp/Icon';
import SideMenu from '../NavBar/Sidemenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate('../OurServices');
  };

  const whatsappLink = 'https://wa.me/+966539822205';
  
  const handleButtonClick = () => {
   
    window.open(whatsappLink, '_blank');
  };


  return (
    <div
      className="relative bg-cover bg-center md:h-screen lg:h-screen xl:h-screen 2xl:h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay Image */}
      <div className="absolute inset-0">
        <Image
          name="layer"
          alt="Overlay"
          className="opacity-100 w-1/2 h-full object-cover"
          style={{ right: 0, position: 'absolute' }}
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
                className="lg:hidden text-white focus:outline-none text-3xl p-2 border"
              >
                ☰
              </button>

              <div className="hidden lg:block">
                <Image name="logo" className="w-[185.71px] h-[70px]" />
              </div>

              <div dir="rtl" className="hidden lg:flex justify-center items-center gap-4">

              <NavLink
              to="/"
              className="text-lg font-medium mx-2 relative border-b-2 border-[#AC8B2E] transition-all duration-300 group">
              الرئيسية
              <span
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-500 group-hover:w-full"
              ></span>
              <style>
                {`
                  .group:hover {
                    border-bottom-color: transparent; 
                  }
                `}
              </style>
          </NavLink>


<NavLink
  to="whoAreWe"
  className="text-lg font-medium mx-2 relative group"
>
  من نحن
  <span
    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-500 group-hover:w-full"
  ></span>
</NavLink>

                <NavLink
                  to="ourservices"
                  className="text-lg font-medium mx-2 relative group"
                >
                  خدماتنا
                  <span
    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-500 group-hover:w-full"
  ></span>
                </NavLink>
                <NavLink
                  to="blog"
                  className="text-lg font-medium mx-2 relative group"
                >
                  المدونة
                  <span
    className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8c4b9] transition-all duration-500 group-hover:w-full"
  ></span>
                </NavLink>
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <button onClick={handleButtonClick} className="border border-[#FFFFFF] text-white mx-2 px-4 lg:px-6 xl:px-8 py-1 relative overflow-hidden group">
                  إتصل بنا
                  <span className="absolute inset-0 bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
                </button>

                <div className="relative group">
                  <Icon name="iconsearch" size={32} />
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="flex items-center justify-between mt-8 md:mt-40 lg:mt-32 xl:mt-60  feat">
          <div className="flex-col justify-start items-start">
            <Link to="#">
              <Icon name="facebook" className="my-4" size={24} />
            </Link>
            <Link to="#">
              <Icon name="linkedIn" className="my-4" size={24} />
            </Link>
            <Link to="#">
              <Icon name="youtube" className="my-4" size={24} />
            </Link>
            <Link to="#">
              <Icon name="twitter" className="my-4" size={24} />
            </Link>
          </div>

          <div dir="rtl" className="text-white">
            <h3>شركة تعاون</h3>
            <h5 className="mt-2">المتطورة لخدمات الأعمال</h5>
            <p className="opacity-50 mt-2">
              شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم <br />
              خدمات للشركات فى كافة القطاعات وكافة الأنشطة.
            </p>

            <div>
              <Link onClick={handleClick}  className="bg-[#AC8B2E] inline-block text-white ml-5 my-10 py-1 px-16 lg:px-16 xl:px-20 relative overflow-hidden group">
                خدماتنا
                <span className="absolute bottom-0 left-0 w-full h-full bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
              </Link>
              <Link onClick={handleButtonClick} className="bg-transparent inline-block text-white my-2 md:my-10 py-1 px-16 lg:px-20 xl:px-20 border border-[#FFFFFF] relative overflow-hidden group">
                تواصل معنا
                <span className="absolute bottom-0 left-0 w-full h-full bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
              </Link>
            </div>
          </div>
        </div>

        <div
          dir="rtl"className="flex flex-col md:flex-row items-center text-white feat  space-y-4 md:space-y-0">
          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8  w-full md:w-1/3">
            <Icon name="star" className="ml-2 lg:ml-4 " size={32} />
            <div>
              <p className="text-base lg:text-lg">الخبرة</p>
              <p className="text-[8px] lg:text-xs">نجمع بين الكفاءة المهنية والخبرة العملية التى تؤهلنا لمساعدة عملاؤنا فى التطوير دائما</p>
            </div>
          </div>

          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8 w-full md:w-1/3">
            <Icon name="simple" className="ml-2 lg:ml-4" size={38} />
            <div>
              <p className="text-base lg:text-lg">الخدمة</p>
              <p className="text-[8px] lg:text-xs">فريق عمل متخصص فى كافة المجالات مما يساعد الشركات على تقليل التكاليف وزيادة الإيرادات وبناء إسم تجارى قوي</p>
            </div>
          </div>

          <div className="flex space-x-4 lg:space-x-6 xl:space-x-8 w-full md:w-1/3">
            <Icon name="safety" className="mb-4 md:mb-0 ml-2 lg:ml-2" size={32} />
            <div className="mb-4 md:mb-0">
              <p className="text-base lg:text-lg">الثقة</p>
              <p className="text-[8px] lg:text-xs">نسعى جاهدين للتميز لضمان رضا العميل</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

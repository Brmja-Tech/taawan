
import { NavLink } from 'react-router-dom';
import Image from '../../lib/ImgComp/Image';

const SideMenu = ({ isOpen, toggleMenu }) => {
    return (
      <div className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div dir='rtl' className="flex items-center justify-between p-4 border-b border-gray-200">
          <Image name="logo" width={200} className='bg-black' />
  
          
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-800">
            ✕
          </button>
        </div>
  
        
        <nav dir='rtl' className="p-4 space-y-4">
          <div className="items-start gap-4 flex flex-col">
            <div className="flex items-center gap-2 cursor-pointer">
              <NavLink to="/" className="text-lg font-medium text-black">الرئيسية</NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <NavLink to="whoAreWe" className="text-lg font-medium text-black">من نحن</NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <NavLink to="ourservices" className="text-lg font-medium text-black">خدماتنا</NavLink>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <NavLink to="blog" className="text-lg font-medium text-black">المدونة</NavLink>
            </div>
          </div>
  
        
        </nav>
      </div>
    );
  };
  
  export default SideMenu;

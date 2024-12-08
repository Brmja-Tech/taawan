import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon'



function index() {
  return (
    <nav className="bg-black text-white">
    <div className="container mx-auto flex items-center justify-between">
      
      <div className="flex items-center space-x-4">
        <button className="border border-[#FFFFFF] text-white px-4 py-1 ">إتصل بنا</button>
        <Icon name='iconsearch' size={24} />
       
      </div>
  
   
      <div dir='rtl' className="flex justify-center items-center ">
        <NavLink to="/" className="text-lg font-medium mx-2">الرئيسية</NavLink>
        <NavLink to="whoAreWe" className="text-lg font-medium mx-2">من نحن</NavLink>
        <NavLink to="ourservices" className="text-lg font-medium mx-2">خدماتنا</NavLink>
        <NavLink to="blog" className="text-lg font-medium mx-2">المدونة</NavLink>
      </div>
  
      
      <div className="flex items-center">
      <Image name='logo' className='w-[185.71px] h-[70px] ' />
        
      </div>
    </div>
  </nav>
  


  )
}

export default index


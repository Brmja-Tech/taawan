import React from 'react'
import backgroundImage from '../../assets/imags/background.svg';
import { Link, NavLink } from 'react-router-dom'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon'

function Header() {
  return (
    <div className="bg-cover bg-center h-screen "
    style={{ backgroundImage: `url(${backgroundImage})` }}>

<div className=' w-full pt-12'>
<nav className=" text-white feat ">
    <div className="flex items-center justify-between">
      
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
</div>
<div className='flex items-center justify-between mt-48 feat'>
  
  <div>
        <Icon name='facebook' className='my-4' size={24} />
        <Icon name='linkedIn' className='my-4' size={24} />
        <Icon name='youtube' className='my-4' size={24} />
        <Icon name='twitter' className='my-4' size={24} />
      
  </div>

  <div dir='rtl' className='text-white'>
    <h3>شركة تعاون</h3>
    <h5>المتطورة لخدمات الأعمال</h5>
    <p>شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم <br /> خدمات للشركات فى كافة القطاعات وكافة الانشطة . </p>

    <div>
    <Link className='bg-[#AC8B2E] inline-block text-white ml-5 my-10 py-1 px-12'>خدماتنا</Link>
    <Link className='bg-transparent inline-block text-white my-10 py-1 px-12 border border-[#FFFFFF]'>تواصل معنا</Link>
    </div>

  </div>

</div>

<div dir='rtl' className='flex items-center text-white feat mt-24'>

  <div className='flex w-1/3'>
  <Icon name='star' className='ml-2' size={24} />
   <div>
   <p>الخبرة</p>
   <p className='text-xs'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
   </div>
  </div>

  <div className='flex w-1/3'>
  <Icon name='simple' className='ml-2' size={24} />
   <div>
   <p>الخدمة</p>
   <p className='text-xs'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
   </div>
  </div>

  <div className='flex w-1/3'>
  <Icon name='safety' className='ml-2' size={24} />
   <div>
   <p>الثقة</p>
   <p className='text-xs'>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
   </div>
  </div>

</div>

    </div>
  )
}

export default Header

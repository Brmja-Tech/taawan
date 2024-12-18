import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon'

import { Link, useNavigate } from 'react-router-dom'



function Footer() {


  const navigate = useNavigate();
  const navigateBlog = useNavigate();

  const handleClick = () => {
    
    navigate('/OurServices');
  };
 
  const handleClickBlog = () => {
    
    navigateBlog('/src/components/Blog');
  };


  const whatsappLink = 'https://wa.me/+966539822205';

  const mailtoLink = 'info@taawan.sa';
  
  const handleButtonClick = () => {
   
    window.open(whatsappLink, '_blank');
  };

  const handleButtonmail = () => {
    
    window.location.href = mailtoLink;
  };

  return (
    <> 
<footer className="bg-[#1D1B20] text-white">

<div className='flex justify-end feat  '>
  <Image name='logo' className='w-[185.71px] h-[70px] mt-12 mx-0' />
</div>

  <div dir='rtl' className="container mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
   
    <div className="flex-1">
      <h3 className="text-3xl font-bold mb-4">شركة تعاون</h3>
      <p className="text-2xl mb-2">المتطورة لخدمات الأعمال</p>
      <p className="text-sm text-[#FFFFFF99] mb-6">
        شركة ذات مسؤولية محدودة بمدينة الرياض تهدف لتقديم <br /> خدمات الشركات في كافة القطاعات وكافة الأنشطة.
      </p>
      <div onClick={handleButtonClick} className="text-sm flex justify-start mb-4 " >
       <Icon name='phone' size={24}  />
        <Link  className="mx-2 border-b-2 border-transparent hover:border-gray-400 transition-all duration-300"> 00966539822205</Link>
      </div>
      <div onClick={handleButtonmail} className="text-sm flex justify-start" >
       <Icon name='mail' size={24} />
        <Link className="mx-2 border-b-2 border-transparent hover:border-gray-400 transition-all duration-300"> info@taawan.sa</Link>
      </div>
    </div>

    <div className="flex-1">
      <h3 className="text-xl relative foot font-bold mb-4">شركة تعاون</h3>
      <ul className="space-y-2 mr-4 text-sm">
        <li><Link onClick={handleButtonClick} className="text-[#5E5B62] hover:underline">تواصل معنا</Link></li>
        <li><Link  className="text-[#5E5B62] hover:underline">من نحن</Link></li>
        <li><Link onClick={handleClick} className="text-[#5E5B62] hover:underline">خدماتنا</Link></li>
        <li><Link onClick={handleClickBlog} className="text-[#5E5B62] hover:underline">المدونة</Link></li>
      </ul>
    </div>

    <div className="flex-1 -tracking-tight">
      <h3 className="text-lg font-bold mb-4 relative foot">يمكنك إيجادنا على</h3>
      <p className="text-sm text-gray-400 mb-4">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس  <br />المساحة. لقد تم توليد هذا النص من مولد النص العربي.
      </p>
       
      <div className="relative">
  <input className="w-full bg-[#D9D9D9] p-4 pl-10" type="text" placeholder="اكتب لنا رأئيك" />
  <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2" name="sender" size={24} />
</div>

      <div className="flex mt-4  space-x-4">
        <Icon name='facebook' className='my-6 ml-4' size={24} />
        <Icon name='linkedIn' className='my-6 mx-4' size={24} />
        <Icon name='youtube' className='my-6 mx-4' size={24} />
        <Icon name='twitter' className='my-6 mx-4' size={24} />
      </div>
    </div>
  </div>

  
  <div className=" flex items-center justify-between bg-[#28262A]   py-4 mt-8  text-[#5E5B62] text-xs ">
    <p className='mx-8'>© 2010-2024 <a href="https://brmja.tech/"> brmja.tech </a> جميع الحقوق محفوظة</p>
    <div className="flex space-x-4 mx-8 mt-2">
      <p  className="hover:underline">شروط الاستخدام</p>
      <p  className="hover:underline">سياسة الخصوصية</p>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer

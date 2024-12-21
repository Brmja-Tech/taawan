import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../../lib/ImgComp/Image'


function Features() {

  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate('../OurServices');
  };
  return (
    <>
    
    <div dir='rtl' className='flex flex-col md:flex-row lg-flex-row justify-center my-20 feat '>
    <div className='w-full md:w-1/2  relative features -tracking-tight order-2 md:order-1'>
    <h3 className='text-2xl md:text-6xl mb-8 md:mb-14'>من نحن</h3>
    <p className='text-lg md:text-2xl mb-4 md:mb-12'>شركة تعاون المتطورة لخدمات الأعمال</p>
    <p className='text-sm md:text-lg text-[#3C3C43] mb-4 md:mb-12'>
        شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم خدمات <br />
        للشركات فى كافة القطاعات وكافة الأنشطة كما أننا نقدم خدمات <br />
        استشارة للإدارات العليا متخصصة وذلك من خلال خبراء متخصصون <br />
        فى تطوير الشركات.
    </p>
    <p className='text-sm md:text-lg text-[#3C3C43] mb-6 md:mb-12'>
        تقدم الشركة الحلول المناسبة للشركات وتساعدها على تقليل <br />
        التكاليف وزيادة الإيرادات وبناء إسم تجارى قوى من خلال فريق عمل <br />
        لديهم الكفاءة والمهارة وخبرة فى تطوير وإدارة الشركات.
    </p>
    <Link onClick={handleClick}  className='bg-[#AC8B2E] inline-block text-white ml-5 mt-6 md:mt-14 py-2 px-14 relative overflow-hidden group'>
        خدماتنا
        <span className="absolute bottom-0 left-0 w-full h-full bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
    
    </Link>
</div>


     <div className='w-full md:w-1/2 flex gap-3 md:gap-6 order-1 md:order-2'>
  
  <div className='flex flex-col space-y-4 w-1/2'>
    <Image name='image1' className='w-full' />
  <Image name='frame' className='w-full rounded-[34px] opacity-[25%]' />

  </div>

  <div className='w-1/2'>
  <Image name='image' className='w-full' />

  </div>
</div>


  
    </div>
      
    </>
  )
}

export default Features

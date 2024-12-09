import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../lib/ImgComp/Image'


function Features() {
  return (
    <>
    
    <div dir='rtl' className='flex  justify-center my-20 feat '>
        <div className='w-1/2 relative features -tracking-tight '>
            <h3 className='text-6xl mb-14'>من نحن</h3>
            <p className='text-2xl mb-12'>شركة تعاون المتطورة لخدمات الأعمال </p>
            <p className='text-lg text-[#3C3C43] mb-12 '>شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم خدمات <br /> للشركات فى كافة القطاعات وكافة الانشطة كما اننا نقدم خدمات <br /> استشارة للإدارات العليا متخصصة وذلك من خلال خبراء متخصصون <br /> فى تطوير الشركات .</p>
            <p className='text-lg text-[#3C3C43] '>تقدم الشركة الحلول المناسبة للشركات وتساعدها على تقليل  <br />التكاليف وزيادة الإيرادات وبناء إسم تجارى قوى من خلال فريق عمل <br /> لديهم الكفاءة والمهارة وخبرة فى تطوير وإدارة الشركات</p>
             <Link className='bg-[#AC8B2E] inline-block text-white ml-5 mt-14 py-2 px-14'>خدماتنا</Link>
        </div>

     <div className='w-1/2 flex gap-6'>
  
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

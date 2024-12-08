import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../../lib/ImgComp/Image'


function Features() {
  return (
    <>
    
    <div dir='rtl' className='flex items-center justify-center my-20 feat '>
        <div className='w-1/2 relative features '>
            <h3 className='text-4xl'>من نحن</h3>
            <p className='text-lg'>شركة تعاون المتطورة لخدمات الأعمال </p>
            <p className='text-sm'>شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم خدمات للشركات فى كافة القطاعات وكافة الانشطة كما اننا نقدم خدمات استشارة للإدارات العليا متخصصة وذلك من خلال خبراء متخصصون فى تطوير الشركات .</p>
            <p className='text-sm'>تقدم الشركة الحلول المناسبة للشركات وتساعدها على تقليل التكاليف وزيادة الإيرادات وبناء إسم تجارى قوى من خلال فريق عمل لديهم الكفاءة والمهارة وخبرة فى تطوير وإدارة الشركات</p>
             <Link className='bg-[#AC8B2E] inline-block text-white ml-5 my-10 py-1 px-12'>خدماتنا</Link>
        </div>

     <div className='w-1/2 flex gap-4'>
  
  <div className='flex flex-col space-y-4 w-1/2'>
    <Image name='image1' className='w-full' />
  <Image name='frame' className='w-full rounded-[34px] opacity-[25%]' />

  </div>

  <div className='w-1/2 flex items-center justify-center'>
  <Image name='image' className='w-full' />

  </div>
</div>


   
    </div>
      
    </>
  )
}

export default Features

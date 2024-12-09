import React from 'react'
import Image from '../../lib/ImgComp/Image'
import { Link } from 'react-router-dom'
import OurVision from '../OurVision/OurVision'


function WhoAreWe() {
  return (
    <>
    <div dir='rtl' className='flex  justify-center my-20 feat '>
        <div className='w-1/2 relative man -tracking-tight '>
            <h3 className='text-6xl mb-14'>من نحن</h3>
            <p className='text-2xl mb-12'>شركة تعاون المتطورة لخدمات الأعمال </p>
            <p className='text-lg text-[#3C3C43] mb-12 '>شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم خدمات <br /> للشركات فى كافة القطاعات وكافة الانشطة كما اننا نقدم خدمات <br /> استشارة للإدارات العليا متخصصة وذلك من خلال خبراء متخصصون <br /> فى تطوير الشركات .</p>
            <p className='text-lg text-[#3C3C43] '>تقدم الشركة الحلول المناسبة للشركات وتساعدها على تقليل  <br />التكاليف وزيادة الإيرادات وبناء إسم تجارى قوى من خلال فريق عمل <br /> لديهم الكفاءة والمهارة وخبرة فى تطوير وإدارة الشركات</p>
             <Link className='bg-[#AC8B2E] inline-block text-white ml-5 mt-14 py-2 px-14'>خدماتنا</Link>
        </div>

     <div className='w-1/2 flex-col'>
  
  <div className='flex flex-row  w-1/2'>
  <Image name='frame' className='w-full rounded-[34px] opacity-[25%]' />
    <Image name='whoarewe1' className='w-full' />

  </div>
  <div className='w-full flex'>
  <Image name='whoarewe2' className='w-full' />
  </div>
</div>


  
    </div>
<div className='my-24'>
<OurVision />
</div>

<div dir='rtl' className='flex  justify-center my-20 feat '>
        <div className='w-1/2 relative man -tracking-tight '>
            <h3 className='text-6xl mb-16 font-bold'> لماذا نحن ؟</h3>
            <p className='text-[18px] mb-14 text-[#999999]'>شركة تعاون لخدمات الاعمال تقدم حلولا متطورة للمنشأت وتحسن <br /> من ادائها عبر العديد من الخدمات والحلول الاستراتيجية بالاضافة  <br />الي تزويد اصحاب الشركات بالافكار التي تعزز من ارباحهم وخدماتهم <br /> للعملاء</p>
            <p className='text-lg text-[#999999] mb-16 '>فريق عمل متخصص في كافة المجالات مما يساعد الشركات علي <br /> تقليل التكاليف وزيادة الايرادات وبناء اسم تجاري قوي</p>
            <p className='text-lg text-[#999999] mb-16 '>نجمع بين الكفاءه المهنية والخبرة العملية التي <br /> تؤهلنا لمساعدة عملاؤنا في التطور دائما </p>
            <p className='text-lg text-[#999999] mb-16 '> نسعي جاهدين للتميز لضمان رضا العميل</p>
        </div>

     <div className='w-1/2'>
  <Image name='man' className='w-full ' />
</div>
    </div>
      
    </>
  )
}

export default WhoAreWe

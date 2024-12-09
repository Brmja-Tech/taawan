import React from 'react'
import Image from '../../lib/ImgComp/Image'


export default function WhyWe() {
  return (
    <>
 <div dir='rtl' className='flex  justify-center my-20 feat '>
        <div className='w-1/2 relative man -tracking-tight '>
            <h3 className='text-6xl mb-16 font-bold'> لماذا نحن ؟</h3>
            <p className='text-[18px] mb-14 text-[#999999]'>شركة تعاون لخدمات الاعمال تقدم حلولا متطورة للمنشأت وتحسن <br /> من ادائها عبر العديد من الخدمات والحلول الاستراتيجية بالاضافة  <br />الي تزويد اصحاب الشركات بالافكار التي تعزز من ارباحهم وخدماتهم <br /> للعملاء</p>
            <p className='text-lg text-[#999999] mb-16 '>فريق عمل متخصص في كافة المجالات مما يساعد الشركات علي <br /> تقليل التكاليف وزيادة الايرادات وبناء اسم تجاري قوي</p>
            <p className='text-lg text-[#999999] mb-16 '>فريق عمل متخصص في كافة المجالات مما يساعد الشركات علي <br /> تقليل التكاليف وزيادة الايرادات وبناء اسم تجاري قوي</p>
            <p className='text-lg text-[#999999] mb-16 '> نسعي جاهدين للتميز لضمان رضا العميل</p>
        </div>

     <div className='w-1/2'>
  <Image name='man' className='w-full ' />
</div>
    </div>
    </>
  )
}

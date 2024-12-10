import React from 'react';
import Image from '../../lib/ImgComp/Image';

export default function WhyWe() {
  return (
    <>
      <div dir="rtl" className="flex flex-col lg:flex-row justify-center my-20 feat space-y-6 lg:space-y-0 lg:space-x-6">
        
        <div className="order-1 lg:order-2 w-full lg:w-1/2">
          <Image name="man" className="w-full" />
        </div>

        
        <div className="order-2 lg:order-1 w-full lg:w-1/2 relative man -tracking-tight text-right">
          <h3 className="text-2xl md:text-5xl mb-4 md:mb-16 font-bold"> لماذا نحن ؟</h3>
          
          
          <p className="text-sm md:text-[18px] mb-4 md:mb-14 text-[#3C3C43] hover:text-black transition-colors duration-300">
            شركة تعاون لخدمات الاعمال تقدم حلولا متطورة للمنشأت وتحسن <br /> من ادائها عبر العديد من الخدمات والحلول الاستراتيجية بالاضافة <br />
            الي تزويد اصحاب الشركات بالافكار التي تعزز من ارباحهم وخدماتهم <br /> للعملاء
          </p>
          <p className="text-sm md:text-[18px] text-[#3C3C43] mb-3 md:mb-16 hover:text-black transition-colors duration-300">
            فريق عمل متخصص في كافة المجالات مما يساعد الشركات علي <br /> تقليل التكاليف وزيادة الايرادات وبناء اسم تجاري قوي
          </p>
          <p className="text-sm md:text-[18px] text-[#3C3C43] mb-3 md:mb-16 hover:text-black transition-colors duration-300">
            فريق عمل متخصص في كافة المجالات مما يساعد الشركات علي <br /> تقليل التكاليف وزيادة الايرادات وبناء اسم تجاري قوي
          </p>
          <p className="text-sm md:text-[18px] text-[#3C3C43] mb-3 md:mb-16 hover:text-black transition-colors duration-300">نسعي جاهدين للتميز لضمان رضا العميل</p>
        </div>
      </div>
    </>
  );
}

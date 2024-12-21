import React from "react";
import Image from "../../lib/ImgComp/Image";

export default function WhyWe() {
  return (
    <>
      <div
        dir="rtl"
        className="flex flex-col lg:flex-row justify-center items-center my-20 feat space-y-6 lg:space-y-0 lg:space-x-6"
      >
        <div className="order-1 lg:order-2 w-full lg:w-1/2">
          <Image name="man" className="w-full" />
        </div>

        <div className="order-2 lg:order-1 w-full lg:w-1/2 relative man text-right">
          <h3 className="text-2xl md:text-5xl mb-4 md:mb-16 font-bold">
            لماذا نحن ؟
          </h3>

          <p className="text-sm md:text-[18px] mb-5 md:mb-14 text-[#3C3C43] hover:text-black transition-colors duration-300 group relative pr-4">
            شركة تعاون لخدمات الاعمال تقدم حلولا متطورة للمنشأت وتحسن من ادائها
            عبر العديد من الخدمات والحلول الاستراتيجية بالاضافة الي تزويد اصحاب
            الشركات بالافكار التي تعزز من ارباحهم وخدماتهم للعملاء
            <span className="absolute right-0 top-0 h-full w-1 bg-gray-500 scale-y-0 group-hover:scale-y-100 transition-all duration-500"></span>
          </p>

          <p className="text-sm md:text-[18px] text-[#3C3C43] mb-3 md:mb-16 hover:text-black transition-colors duration-300 group relative pr-4">
            فريق عمل متخصص في كافة المجالات مما يساعد الشركات على تقليل التكاليف
            وزيادة الايرادات وبناء اسم تجاري قوي
            <span className="absolute right-0 top-0 h-full w-1 bg-gray-500 scale-y-0 group-hover:scale-y-100 transition-all duration-500"></span>
          </p>

          <p className="text-sm md:text-[18px] text-[#3C3C43] mb-3 md:mb-16 hover:text-black transition-colors duration-300 group relative pr-4">
            نجمع بين الكفاءة المهنية والخبرة العملية التى تؤهلنا لمساعدة عملاؤنا
            فى التطوير دائما
            <span className="absolute right-0 top-0 h-full w-1 bg-gray-500 scale-y-0 group-hover:scale-y-100 transition-all duration-500"></span>
          </p>

          <p className="text-sm md:text-[18px] text-[#3C3C43] mb-3 md:mb-16 hover:text-black transition-colors duration-300 group relative pr-4">
            نسعى جاهدين للتميز لضمان رضا العميل
            <span className="absolute right-0 top-0 h-full w-1 bg-gray-500 scale-y-0 group-hover:scale-y-100 transition-all duration-500"></span>
          </p>
        </div>
      </div>
    </>
  );
}

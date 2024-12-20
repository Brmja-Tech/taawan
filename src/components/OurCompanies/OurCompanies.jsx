import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Navigation} from "swiper/modules"; 
import "swiper/css/autoplay";
import 'swiper/css/navigation';
import "swiper/css";

import Image from "../../lib/ImgComp/Image";


export default function OurCompanies() {
  return (
    <>
      <div className="p-6">
        <div className="text-right mb-8 relative companies -tracking-tight feat">
          <h2 className="text-lg md:text-2xl mx-2 font-bold text-black">عملائنا</h2>
        </div>
        <div dir="rtl" className="my-16 feat">
          <Swiper
            modules={[Autoplay , Navigation]} 
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            loop={true}
            spaceBetween={20} 
            slidesPerView={1} 
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,    
                spaceBetween: 30,
              },
            }}
           navigation={true} 
          >
            <SwiperSlide>
              <div className="flex flex-col items-center w-full p-6 border border-[#EBEDF0]">
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-20 md:py-24">
                  <Image name="taawan" className="border-8 rounded-full border-[#F6F6F6]" />
                </div>
                <div className="border-2 border-[#EBEDF0] w-full"></div>
                <div className="mt-5">
                  <h3 className="text-lg text-center font-bold text-black mb-3">شركة تعاون</h3>
                
                </div>
              </div>
            </SwiperSlide>
            

            <SwiperSlide>
              <div className="flex flex-col items-center w-full p-6 border border-[#EBEDF0]">
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-20 md:py-24">
                  <Image name="itqaan" className="border-8 rounded-full border-[#F6F6F6]" />
                </div>
                <div className="border-2 border-[#EBEDF0] w-full"></div>
                <div className="mt-5">
                  <h3 className="text-lg text-center font-bold text-black mb-3">شركة إتقان</h3>
                 
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col items-center w-full p-6 border border-[#EBEDF0]">
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-20 md:py-24">
                  <Image name="greenhome" className="border-8 rounded-full border-[#F6F6F6]" />
                </div>
                <div className="border-2 border-[#EBEDF0] w-full"></div>
                <div className="mt-5">
                  <h3 className="text-lg text-center font-bold text-black mb-3">شركة جرين هوم</h3>
                 
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center w-full p-6 border border-[#EBEDF0]">
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-20 md:py-24">
                  <Image name="itqaan" className="border-8 rounded-full border-[#F6F6F6]" />
                </div>
                <div className="border-2 border-[#EBEDF0] w-full"></div>
                <div className="mt-5">
                  <h3 className="text-lg text-center font-bold text-black mb-3">شركة إتقان</h3>
                
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center w-full p-6 border border-[#EBEDF0]">
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-20 md:py-24">
                  <Image name="taawan" className="border-8 rounded-full border-[#F6F6F6]" />
                </div>
                <div className="border-2 border-[#EBEDF0] w-full"></div>
                <div className="mt-5">
                  <h3 className="text-lg text-center font-bold text-black mb-3">شركة تعاون</h3>
                
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col items-center w-full p-6 border border-[#EBEDF0]">
                <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-20 md:py-24">
                  <Image name="greenhome" className="border-8 rounded-full border-[#F6F6F6]" />
                </div>
                <div className="border-2 border-[#EBEDF0] w-full"></div>
                <div className="mt-5">
                  <h3 className="text-lg text-center font-bold text-black mb-3">شركة جرين هوم</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

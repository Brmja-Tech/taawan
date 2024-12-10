import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from '../../lib/ImgComp/Image';
import { Link } from 'react-router-dom';
import Icon from '../../lib/IconComp/Icon';

export default function Service() {
  return (
    <>
      <div dir="rtl" className="bg-[#EBEDF0] py-10 px-4">

        <div className="text-right mb-1 md:mb-8 relative service -tracking-tight feat">
          <h2 className="text-2xl mx-2 font-bold text-black">خدماتنا</h2>
        </div>

        <div dir="rtl" className="my-16 feat">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false, 
            }}
            loop={true}   
            spaceBetween={20} 
            slidesPerView={1}    
            breakpoints={{
              640: {
                slidesPerView: 1, 
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, 
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-8 md:mt-14 relative">
                <div className="relative w-full overflow-hidden">
                  <Image name="service2" className="w-full h-auto transition-transform duration-500 hover:translate-y-[-10px]" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
                    <p className="text-sm text-right">
                      هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative">
                <div className="relative w-full overflow-hidden">
                  <Image name="service1" className="w-full h-auto transition-transform duration-500 hover:translate-y-[-10px]" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
                    <p className="text-sm text-right">
                      هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative">
                <div className="relative w-full overflow-hidden">
                  <Image name="service" className="w-full h-auto transition-transform duration-500 hover:translate-y-[-10px]" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
                    <p className="text-sm text-right">
                      هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-8 md:mt-14 relative">
                <div className="relative w-full overflow-hidden">
                  <Image name="service2" className="w-full h-auto transition-transform duration-500 hover:translate-y-[-10px]" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
                    <p className="text-sm text-right">
                      هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative">
                <div className="relative w-full overflow-hidden">
                  <Image name="service1" className="w-full h-auto transition-transform duration-500 hover:translate-y-[-10px]" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
                    <p className="text-sm text-right">
                      هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative">
                <div className="relative w-full overflow-hidden">
                  <Image name="service" className="w-full h-auto transition-transform duration-500 hover:translate-y-[-10px]" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
                    <p className="text-sm text-right">
                      هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="flex mt-4 md:mt-6 items-center justify-end md:ml-16">
          <Link to="" className="text-[#000000] text-sm md:text-base font-bold">
            عرض الكل
          </Link>
          <Icon name="arrowleft" size={18} />
        </div>

      </div>
    </>
  );
}

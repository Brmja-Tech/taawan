import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "../../lib/ImgComp/Image";

export default function Partners() {
  return (
    <div className="my-16 feat">
      <div className="text-right mb-8 relative partner -tracking-tight">
        <h2 className="text-2xl mx-2 font-bold text-black mb-10">شركاء النجاح</h2>

        <Swiper
          modules={[Autoplay]} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}  
          slidesPerView={4} 
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Image name="rectangle1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image name="rectangle1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image name="rectangle1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image name="rectangle1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image name="rectangle2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image name="rectangle3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image name="rectangle4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

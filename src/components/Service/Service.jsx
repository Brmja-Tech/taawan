import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
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
              delay: 2000,
              disableOnInteraction: true, 
            }}
            loop={true}   
            spaceBetween={20} 
            slidesPerView={1}    
            breakpoints={{
              640: {
                slidesPerView: 1, 
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3, 
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3, 
                spaceBetween: 30,
              },
            }}
        
          >
            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] md:w-[100%]  overflow-hidden border-2 border-[#FFFFFF] p-3 mt-8 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="service2" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
                    <p className="text-sm text-right">
                    تسجيل المعاملات المالية، إعداد التقارير والميزانيات، إدارة الضرائب</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img7" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">إدارة الموارد البشرية</h3>
                    <p className="text-sm text-right">
                    تنظيم وتطوير القوى العاملة من خلال التوظيف، التدريب، تقييم الأداء
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img1" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الحوكمة</h3>
                    <p className="text-sm text-right">
                    نظام يحدد الضوابط والإجراءات لضمان الشفافية والمسؤولية والنزاهة 
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-8 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img6" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">الإستشارات وصناعة البراند</h3>
                    <p className="text-sm text-right">
                    تساعد الشركات في تطوير استراتيجيات وهوية قوية لعلامتها التجارية
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%] md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative  group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img5" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">تقنية المعلومات</h3>
                    <p className="text-sm text-right">
                    تقدم حلولًا ودعمًا تكنولوجيًا تشمل البرمجيات، الشبكات، الأمن
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%]  md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img3" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">إدارة المشاريع</h3>
                    <p className="text-sm text-right">
                    عملية تخطيط وتنظيم وتنفيذ ومراقبة المشاريع لضمان تحقيق الأهداف 
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%]  md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img4" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">إدارة المصانع</h3>
                    <p className="text-sm text-right">
                    عملية تنظيم وتوجيه جميع الأنشطة المتعلقة بتصنيع المنتجات
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%]  md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img2" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">تأسيس المنشآت</h3>
                    <p className="text-sm text-right">
                    تسجيل الكيان التجاري، تحديد نوعه، ووضع الأسس التنظيمية لبدء نشاطه</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full sm:w-[48%] lg:w-[100%]  md:w-[100%] overflow-hidden border-2 border-[#FFFFFF] p-3 mt-6 md:mt-14 relative group">
                <div className="relative w-full overflow-hidden transition-transform duration-500 hover:translate-y-[-10px]">
                  <Image name="img8" className="w-full h-auto " />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">التسويق الإلكترونى</h3>
                    <p className="text-sm text-right">
                    استخدام أدوات وتقنيات عبر الإنترنت للترويج للمنتجات والتصميم الدعائى لها</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          
          </Swiper>
        </div>

        <div className="group">
  <div className="flex mt-4 md:mt-6 items-center justify-end md:ml-16 ">
    <Link to="OurServices" className="text-[#000000] text-sm md:text-base font-bold hover:border-b-2 hover:border-gray-950">
      عرض الكل
    </Link>
    <Icon name="arrowleft" size={18} />
  </div>
</div>


      </div>
    </>
  );
}

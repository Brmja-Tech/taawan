import React from 'react'
import Icon from '../../lib/IconComp/Icon'
import Image from '../../lib/ImgComp/Image'

export default function OurVision() {
  return (
    <>
      <div dir="rtl" className="bg-[#1D1B20] text-white py-10 px-4">
        <div className="mb-10 relative vision -tracking-tight feat">
          <h2 className="text-2xl lg:text-4xl font-bold inline-block px-2">
            التوجه الاستراتيجى
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mx-5 parent">
          {/* First Card */}
          <div className="bg-[#00000033] flex-1 p-6 flex flex-col card-one justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span>
                  <Icon name="eye" size={48} className="icon-vision" />
                </span>
                <h3 className="text-xl font-bold mx-2">رؤيتنا</h3>
              </div>
              <div className="border brd border-[#312E36] my-6"></div>

              <p className="text-[#5E5B62] text-sm md:text-base mb-96 card">
                تحقيق الريادة فى مجال خدمات الأعمال داخل المملكة والتوسيع جغرافياً بالخليج
              </p>
            </div>

            {/* Default Image (Hidden on Hover) */}
            <div className="absolute bottom-4 left-4 w-[156px] h-auto">
              <Image
                name="OurVision"
                className="w-full h-full object-contain img-vision transition-opacity duration-300"
                alt="Initial Image"
              />
            </div>

            {/* Hover Image (Displayed on Hover) */}
            <div className="absolute bottom-4 left-4 w-[156px] h-auto hidden group-hover:block">
              <Image
                name="layer1"
                className="w-full h-full object-contain img-vision-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                alt="Hover Image"
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-[#00000033] flex-1 p-6 flex flex-col card-two justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span>
                  <Icon name="send" size={48} className="icon-vision" />
                </span>
                <h3 className="text-xl font-bold mx-2">رسالتنا</h3>
              </div>
              <div className="border brd border-[#312E36] my-6"></div>
              <p className="text-[#5E5B62] text-sm md:text-base mb-96 card">
                نسعى بشكل دائم فى تحقيق المبادرات اللازمة لرفع كفاءة العمل لدى شركائنا
              </p>
            </div>

            {/* Default Image (Hidden on Hover) */}
            <div className="absolute bottom-4 left-4 w-[156px] h-auto">
              <Image
                name="OurVision"
                className="w-full h-full object-contain img-vision transition-opacity duration-300"
                alt="Initial Image"
              />
            </div>

            {/* Hover Image (Displayed on Hover) */}
            <div className="absolute bottom-4 left-4 w-[156px] h-auto hidden group-hover:block">
              <Image
                name="layer1"
                className="w-full h-full object-contain img-vision-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                alt="Hover Image"
              />
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-[#00000033] flex-1 p-6 flex flex-col card-three justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span>
                  <Icon name="huge" size={48} className="icon-vision" />
                </span>
                <h3 className="text-xl font-bold mx-2">القيم</h3>
              </div>
              <div className="border brd border-[#312E36] my-6"></div>
              <p className="text-[#5E5B62] text-sm md:text-base card">
                لدى الشركة عدد من القيم التى تلتزم بها وتساهم فى نمو اعمالها وهى :
              </p>
              <ul className="list-disc list-inside text-[#5E5B62] mt-8 mb-80 card">
                <li>الابتكار والتميز</li>
                <li>الكفاءة</li>
                <li>المهنية</li>
              </ul>
            </div>

            {/* Default Image (Hidden on Hover) */}
            <div className="absolute bottom-4 left-4 w-[156px] h-auto">
              <Image
                name="OurVision"
                className="w-full h-full object-contain img-vision transition-opacity duration-300"
                alt="Initial Image"
              />
            </div>

            {/* Hover Image (Displayed on Hover) */}
            <div className="absolute bottom-4 left-4 w-[156px] h-auto hidden group-hover:block">
              <Image
                name="layer1"
                className="w-full h-full object-contain img-vision-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                alt="Hover Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import React from 'react'
import Image from '../../lib/ImgComp/Image'
import { Link } from 'react-router-dom'
import Icon from '../../lib/IconComp/Icon'



export default function Service() {
  return (
    <>
    <div dir='rtl' className="bg-[#EBEDF0] py-10 px-4">

  <div className="text-right mb-8 relative service -tracking-tight feat">
    <h2 className="text-2xl mx-2 font-bold text-black">خدماتنا</h2>
  </div>

  
  <div dir='rtl' className="flex flex-wrap gap-4 justify-center items-center ">
  
  <div className=" w-1/3 overflow-hidden  sm:w-[48%] lg:w-[30%] border-2 border-[#FFFFFF] p-3  mt-14 ">
    <div className="relative w-full overflow-hidden ">
      {/* الصورة */}
      <Image name='service2' className='w-full h-full' />
     
      {/* النصوص فوق الصورة */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-bold text-right mb-2">
          الخدمات المحاسبية
        </h3>
        <p className="text-sm text-right">
          هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
        </p>
      </div>
    </div>
  </div>

  
  <div className=" w-1/3 overflow-hidden  sm:w-[48%] lg:w-[30%] border-2 border-[#FFFFFF] p-3 mt-14">
    <div className="relative w-full overflow-hidden ">
      {/* الصورة */}
      <Image name='service1' className='w-full h-full' />
     
      {/* النصوص فوق الصورة */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-bold text-right mb-2">
          الخدمات المحاسبية
        </h3>
        <p className="text-sm text-right">
          هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
        </p>
      </div>
    </div>
  </div>

  
  <div className=" w-1/3 overflow-hidden  sm:w-[48%] lg:w-[30%] border-2 border-[#FFFFFF] p-3 mt-14">
    <div className="relative w-full overflow-hidden ">
      {/* الصورة */}
      <Image name='service' className='w-full h-full' />
     
      {/* النصوص فوق الصورة */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
        <h3 className="text-lg font-bold text-right mb-2">
          الخدمات المحاسبية
        </h3>
        <p className="text-sm text-right">
          هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
        </p>
      </div>
    </div>
  </div>
</div>

  <div className="flex mt-6  items-center justify-end ml-16">
  <Link to="" className="text-[#000000] text-base font-bold">
    عرض الكل
  </Link>
  <Icon name="arrowleft" size={18} />
</div>

</div>

    </>
  )
}

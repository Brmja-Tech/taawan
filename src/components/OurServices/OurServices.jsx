import React from 'react'
import Icon from '../../lib/IconComp/Icon';
import Image from '../../lib/ImgComp/Image';
import { Link } from 'react-router-dom';


function OurServices() {
  return (
    <>
    <div dir='rtl' className='md:flex justify-between items-center feat my-10'>

    <div className="text-right mb-8 relative service -tracking-tight feat">
          <h2 className="text-lg md:text-2xl mt-4 md:mt-0 mx-1 font-bold text-black">خدماتنا</h2>
        </div>
        <div  className="flex items-center bg-[#EBEDF0] rounded-[50px] py-[12px] md:px-[25px]">
  <Icon name="searchblack" size={18} className="ml-2 md:ml-3" /> 
  <input type="text" placeholder="بحث عن خدمة" className="bg-transparent border-none  flex-1 outline-none" />
  <span className="mr-4 md:mr-8 text-[#AC8B2E]">بحث</span>  
</div>
    </div>
    
    <div dir="rtl" className="flex flex-wrap gap-12 justify-center items-center my-10">

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service2" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>
 

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service1" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>


</div>
    <div dir="rtl" className="flex flex-wrap gap-12 justify-center items-center my-10">

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service2" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>
 

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service1" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>


</div>
    <div dir="rtl" className="flex flex-wrap gap-12 justify-center items-center my-10">

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service2" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>
 

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service1" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>

    <Link to="/servicedetails">
    <div className="relative overflow-hidden">
    <Image name="service" className="w-full h-full" />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
      <h3 className="text-lg font-bold text-right mb-2">الخدمات المحاسبية</h3>
      <p className="text-sm text-right">
        هذا النص هو مثال نص يمكن أن يستبدل في نفس المساحة
      </p>
    </div>
  </div>
    </Link>


</div>



    
    </>
  )
}

export default OurServices

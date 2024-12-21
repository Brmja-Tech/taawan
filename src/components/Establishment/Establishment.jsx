import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon';
import { Link } from 'react-router-dom';

function Establishment() {
  const whatsappLink = 'https://wa.me/+966539822205';
  
  const handleButtonClick = () => {
   
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
<div dir='rtl' >

<div className="text-right mb-8 mt-8 relative service -tracking-tight feat">
    <h2 className="text-lg  mt-3 md:mt-0   md:text-2xl md:mx-1 font-bold text-black">تأسيس المنشآت</h2>
    <div className='flex items-center my-2'>
    <Link to="/ourservices" className='text-[#5E5B62] text-sm '>خدماتنا</Link>
    <Icon name="arrowlft" size={12} />
    </div>

  </div>

  <div className='feat'>
  <div className="flex-col justify-center items-end h-full">
  <Image name="img3detalis" className="max-w-full max-h-full" />
  <h4 className='text-[#3C3C43] text-2xl mt-10'>تأسيس المنشآت</h4> 
  <p className='text-[#5E5B62] text-lg my-10'>تأسيس المنشآت هو عملية إنشاء الشركات أو المؤسسات بدءًا من تحديد الفكرة التجارية وتحليل السوق، وصولًا إلى الإجراءات القانونية والإدارية مثل تسجيل الشركة، اختيار هيكلها القانوني، وتحضير الخطط التشغيلية والمالية. تهدف هذه العملية إلى تأسيس كيان قانوني يعمل ضمن الأطر القانونية ويحقق الأهداف الاستراتيجية والمالية المحددة.</p>
</div>

  </div>
  <div className='feat'>
    <h4 className='text-[#3C3C43] text-xl my-5'>الباقات</h4>

    <div className="flex flex-col lg:flex-row gap-6 mx-5 parent mb-10">
          

          {/* 1 Card */}
          <div className="bg-[#EBEDF0] w-full lg:w-1/3 p-6 flex flex-col  justify-between relative overflow-hidden ">
            <div>
                <h3 className="text-xl font-bold mx-2">الشركات السعودية</h3>
              <div className="border border-[#312E36] my-6"></div>

              <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8 mb-60 ">
                <li className='mb-3 mx-3'>دراسة الجدوى</li>
                <li className='mb-3 mx-3'>الإستشارات القانونية</li>
                <li className='mb-3 mx-3'>إختيار الإسم التجارى</li>
                <li className='mb-3 mx-3'>إعداد عقود التأسيس</li>
                <li className='mb-3 mx-3'>إصدار التراخيص اللازمة</li>
                <li className='mb-3 mx-3'>فتح الحساب البنكى</li>
                <li className='mb-3 mx-3'>التسجيل فى المنصات الحكومية</li>
                <li className='mb-3 mx-3'>دعم شامل</li>
                
              </ul>

       </div>
       <div className='flex justify-center'>
         <button onClick={handleButtonClick} className='bg-[#C7B349] text-white text-lg px-[50px] py-[4px]'>تواصل الآن</button>
         </div>

          </div>

          {/* 2 Card */}
          <div className="bg-[#EBEDF0] w-full lg:w-1/3 p-6 flex flex-col  justify-between relative overflow-hidden ">
            <div>
                <h3 className="text-xl font-bold mx-2">الشركات الأجنبية</h3>
              <div className="border border-[#312E36] my-6"></div>

              <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8  mb-60 ">
              <li className='mb-3 mx-3'>دراسة الجدوى</li>
                <li className='mb-3 mx-3'>الإستشارات القانونية</li>
                <li className='mb-3 mx-3'>إصدار ترخيص الإستثمار</li>
                <li className='mb-3 mx-3'>إعداد عقود التأسيس</li>
                <li className='mb-3 mx-3'>إصدار التراخيص اللازمة</li>
                <li className='mb-3 mx-3'>فتح الحساب البنكى</li>
                <li className='mb-3 mx-3'>التسجيل فى المنصات الحكومية</li>
                <li className='mb-3 mx-3'>دعم شامل فيما يخص التشغيل</li>
              </ul>
       </div>

       <div className='flex justify-center'>
        <button onClick={handleButtonClick} className='bg-[#C7B349] text-white text-lg px-[50px] py-[4px]'>تواصل الآن</button>
        </div>

          </div>
        </div>

  </div>


</div>
    </>
  )
}

export default Establishment

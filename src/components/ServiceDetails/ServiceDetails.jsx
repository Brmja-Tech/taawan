import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon';
import { Link } from 'react-router-dom';
function ServiceDetails() {

  const whatsappLink = 'https://wa.me/+966539822205';
  
  const handleButtonClick = () => {
   
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
<div dir='rtl' >

<div className="text-right mb-8 mt-8 relative service -tracking-tight feat">
    <h2 className="text-lg  mt-3 md:mt-0   md:text-2xl md:mx-1 font-bold text-black">الخدمات المحاسبية</h2>
    <div className='flex items-center my-2'>
    <Link to="/ourservices" className='text-[#5E5B62] text-sm '>خدماتنا</Link>
    <Icon name="arrowlft" size={12} />
    </div>

  </div>

  <div className='feat'>
  <div className="flex-col justify-center items-end h-full">
  <Image name="service2detalis" className="max-w-full max-h-full" />
  <h4 className='text-[#3C3C43] text-2xl mt-10'>الخدمات المحاسبية</h4> 
  <p className='text-[#5E5B62] text-lg my-10'>الخدمات المحاسبية هي مجموعة من الأنشطة والمهام التي تهدف إلى إدارة وتسجيل وتحليل العمليات المالية للشركات والمؤسسات بشكل دقيق وموثوق. تساعد هذه الخدمات في ضمان الامتثال للقوانين المالية والتنظيمية وتوفير رؤية واضحة لأداء الأعمال واتخاذ القرارات المالية المستنيرة توفر هذه الخدمات مرونة ووقتاً للشركات للتركيز على تطوير أعمالها الأساسية بدلاً من الانشغال بالأعمال المحاسبية الروتينية 
</p>

</div>

  </div>
  <div className='feat'>
    <h4 className='text-[#3C3C43] text-xl my-5'>الباقات</h4>

    <div className="flex flex-col lg:flex-row gap-6 mx-5 parent mb-10">
          {/* First Card */}
          <div className="bg-[#EBEDF0] flex-1 p-6 flex flex-col  justify-between relative overflow-hidden ">
            <div>
                <h3 className="text-xl font-bold mx-2">الباقة الأساسية</h3>
              <div className="border border-[#312E36] my-6"></div>

              <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8 mb-60 ">
                <li className='mb-3 mx-3'>تسجيل المبيعات  </li>
                <li className='mb-3 mx-3'>تسجيل المشتريات </li>
                <li className='mb-3 mx-3'>تسجيل العمليات البنكية </li>
                <li className='mb-3 mx-3'> مسك الدفاتر</li>
                <li className='mb-3 mx-3'> تقديم ورفع الإقرارات الضريبية </li>
              </ul>

       </div>

       <div className='flex justify-center'>
        <button onClick={handleButtonClick} className='bg-[#C7B349] text-white text-lg px-[50px] py-[4px]'>تواصل الآن</button>
        </div>

          </div>

          {/* Second Card */}
          <div className="bg-[#EBEDF0] flex-1 p-6 flex flex-col  justify-between relative overflow-hidden ">
            <div>
                <h3 className="text-xl font-bold mx-2"> الباقة الفضية</h3>
              <div className="border border-[#312E36] my-6"></div>

              <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8 mb-60 ">
                <li className='mb-3 mx-3'> خدمات الباقة الأساسية</li>
                <li className='mb-3 mx-3'>تسجيل العهد  </li>
                <li className='mb-3 mx-3'> إعداد مسيرات الرواتب</li>
                <li className='mb-3 mx-3'> تسجيل الموردين والعملاء</li>
                <li className='mb-3 mx-3'> متابعة وإدارة سجلات الدفعات</li>
                <li className='mb-3 mx-3'> إعداد ميزان المراجعة </li>
                <li className='mx-3'> زيارة شهرية</li>
              </ul>

       </div>
       <div className='flex justify-center'>
         <button onClick={handleButtonClick} className='bg-[#C7B349] text-white text-lg px-[50px] py-[4px]'>تواصل الآن</button>
         </div>

          </div>

          {/* Third Card */}
          <div className="bg-[#EBEDF0] flex-1 p-6 flex flex-col  justify-between relative overflow-hidden ">
            <div>
                <h3 className="text-xl font-bold mx-2">الباقة الذهبية</h3>
              <div className="border border-[#312E36] my-6"></div>

              <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8  mb-60 ">
                <li className='mb-3 mx-3'>خدمات الباقة الفضية </li>
                <li className='mb-3 mx-3'>إعداد القوائم المالية </li>
                <li className='mb-3 mx-3'> إعداد التقارير ( شهرية - ربع سنوية ) </li>
                <li className='mb-3 mx-3'> زيارتين فى الشهر</li>
              
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

export default ServiceDetails

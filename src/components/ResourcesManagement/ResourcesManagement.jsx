import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon';
import { Link } from 'react-router-dom';

function ResourcesManagement() {
    const whatsappLink = 'https://wa.me/+966539822205';
  
    const handleButtonClick = () => {
     
      window.open(whatsappLink, '_blank');
    };
  
    return (
      <>
  <div dir='rtl' >
  
  <div className="text-right mb-8 mt-8 relative service -tracking-tight feat">
      <h2 className="text-lg  mt-3 md:mt-0   md:text-2xl md:mx-1 font-bold text-black">إدارة الموارد البشرية</h2>
      <div className='flex items-center my-2'>
      <Link to="/ourservices" className='text-[#5E5B62] text-sm '>خدماتنا</Link>
      <Icon name="arrowlft" size={12} />
      </div>
  
    </div>
  
    <div className='feat'>
    <div className="flex-col justify-center items-end h-full">
    <Image name="img1detalis" className="max-w-full max-h-full" />
    <h4 className='text-[#3C3C43] text-2xl mt-10'>إدارة الموارد البشرية</h4> 
    <p className='text-[#5E5B62] text-lg my-10'>إدارة الموارد البشرية هي عملية إدارة الأشخاص داخل المنظمة، وتشمل مجموعة من الأنشطة مثل التوظيف، التدريب، التطوير المهني، تحفيز الموظفين، وتقييم أدائهم. تهدف إلى ضمان تحقيق الأهداف الاستراتيجية للمنظمة من خلال توفير بيئة عمل منتجة ومرتكزة على تحفيز الموظفين والحفاظ على التوازن بين احتياجات العمل ورفاهية الأفراد.</p>
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
                  <li className='mb-3 mx-3'>بناء وإدارة ملفات الموظفين</li>
                  <li className='mb-3 mx-3'>إعداد خطابات الموظفين</li>
                  <li className='mb-3 mx-3'>إدارة عقود الموظفين</li>
                  <li className='mb-3 mx-3'>إدارة الإجازات</li>
                  <li className='mb-3 mx-3'>إدارة برنامج ( مقيم )</li>
                  <li className='mb-3 mx-3'>إدارة موقع التأمينات الإجتماعية</li>
                  <li className='mb-3 mx-3'>إدارة موقع وزارة العمل</li>
                  <li className='mb-3 mx-3'> إدارة التأمينات الطبية</li>
                  <li className='mb-3 mx-3'> إدارة نظام ( مدد )</li>
                  <li className='mb-3 mx-3'> إدارة برنامج ( هدف )</li>
                  <li className='mb-3 mx-3'>إدارة الحضور والإنصراف</li>
                  <li className='mb-3 mx-3'>إدارة مسيرات الرواتب</li>
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
                  <li className='mb-3 mx-3'>إدارة المكافأت والحوافز</li>
                  <li className='mb-3 mx-3'>إدارة القروض والعهد</li>
                  <li className='mb-3 mx-3'>إدارة وإجراءات مستحقات نهاية الخدمة</li>
                  <li className='mb-3 mx-3'>بناء الوصف الوظيفى</li>
                  <li className='mb-3 mx-3'>فحص السير الذاتية وإختيار أفضل المرشحين</li>
                  <li className='mx-3'>زيارة مقر الشركة شهرياً</li>
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
                  <li className='mb-3 mx-3'>إعداد سياسات وإجراءات إدارة الموارد البشرية</li>
                  <li className='mb-3 mx-3'>إجراء المقابلات الشخصية</li>
                  <li className='mb-3 mx-3'>الإختيار النهائى</li>
                  <li className='mb-3 mx-3'>إعداد العرض الوظيفى</li>
                  <li className='mb-3 mx-3'>إعداد الهياكل التنظيمية للشركة</li>
                  <li className='mb-3 mx-3'>إعداد مصفوفة الصلاحيات</li>
                  <li className='mb-3 mx-3'>زيارتين شهرياً</li>
                
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

export default ResourcesManagement

import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon';
import { Link } from 'react-router-dom';

function ElectronicMarketing() {
  const whatsappLink = 'https://wa.me/+966539822205';
  
    const handleButtonClick = () => {
     
      window.open(whatsappLink, '_blank');
    };
  
    return (
      <>
  <div dir='rtl' >
  
  <div className="text-right mb-8 mt-8 relative service -tracking-tight feat">
      <h2 className="text-lg  mt-3 md:mt-0   md:text-2xl md:mx-1 font-bold text-black">التسويق الإلكترونى</h2>
      <div className='flex items-center my-2'>
      <Link to="/ourservices" className='text-[#5E5B62] text-sm '>خدماتنا</Link>
      <Icon name="arrowlft" size={12} />
      </div>
  
    </div>
  
    <div className='feat'>
    <div className="flex-col justify-center items-end h-full">
    <Image name="img6detalis" className="max-w-full max-h-full" />
    <h4 className='text-[#3C3C43] text-2xl mt-10'>التسويق الإلكترونى</h4> 
    <p className='text-[#5E5B62] text-lg my-10'>التسويق الإلكتروني هو استخدام الإنترنت والتقنيات الرقمية للترويج للمنتجات والخدمات من خلال استراتيجيات مثل تحسين محركات البحث (SEO)، التسويق عبر البريد الإلكتروني، الإعلان الرقمي، ووسائل التواصل الاجتماعي بهدف الوصول إلى جمهور واسع وزيادة المبيعات وتحقيق النمو.
    </p>
  </div>
  
    </div>
    <div className='feat'>
      <h4 className='text-[#3C3C43] text-xl my-5'>الباقات</h4>
  
      <div className="flex flex-col lg:flex-row gap-6 mx-5 parent mb-10">
            {/* First Card */}
            <div className="bg-[#EBEDF0] flex-1 p-6 flex flex-col  justify-between relative overflow-hidden ">
              <div>
                  <h3 className="text-xl font-bold mx-2">التصميم</h3>
                <div className="border border-[#312E36] my-6"></div>
  
                <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8 mb-60 ">
                  <li className='mb-3 mx-3'>تصميم هوية تجارية كاملة</li>
                  <li className='mb-3 mx-3'>تصميم العلامات التجارية وتسجيلها </li>
                  <li className='mb-3 mx-3'>تصميم تصاميم دعائية</li>
                  <li className='mb-3 mx-3'>فيديو ريلز (Reels) وستورى</li>
                  <li className='mb-3 mx-3'>فتح حسابات التواصل الإجتماعى</li>
                  <li className='mb-3 mx-3'>إدارة حسابات التواصل الإجتماعى بشكل كامل</li>
                  <li className='mb-3 mx-3'>إدارة المحتوى</li>
                  <li className='mb-3 mx-3'>إعداد خطة التسويق</li>
                </ul>
  
         </div>
  
         <div className='flex justify-center'>
          <button onClick={handleButtonClick} className='bg-[#C7B349] text-white text-lg px-[50px] py-[4px]'>تواصل الآن</button>
          </div>
  
            </div>
  
            {/* Second Card */}
            <div className="bg-[#EBEDF0] flex-1 p-6 flex flex-col  justify-between relative overflow-hidden ">
              <div>
                  <h3 className="text-xl font-bold mx-2">الإعلانات الممولة</h3>
                <div className="border border-[#312E36] my-6"></div>
  
                <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8 mb-60 ">
                  <li className='mb-3 mx-3'>جوجل ماب google maps</li>
                  <li className='mb-3 mx-3'>تويتر / twitter</li>
                  <li className='mb-3 mx-3'>انستغرام / instagram</li>
                  <li className='mb-3 mx-3'>سناب شات / snapchat</li>
                  <li className='mb-3 mx-3'>إعلانات جوجل ( google ads )</li>
                </ul>
  
         </div>
         <div className='flex justify-center'>
           <button onClick={handleButtonClick} className='bg-[#C7B349] text-white text-lg px-[50px] py-[4px]'>تواصل الآن</button>
           </div>
  
            </div>
  
            {/* Third Card */}
            <div className="bg-[#EBEDF0] flex-1 p-6 flex flex-col  justify-between relative overflow-hidden ">
              <div>
                  <h3 className="text-xl font-bold mx-2">تصميم المواقع الإلكترونية</h3>
                <div className="border border-[#312E36] my-6"></div>
  
                <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8  mb-60 ">
                  <li className='mb-3 mx-3'>تصميم موقع إلكترونى</li>
                  <li className='mb-3 mx-3'>إعداد الموقع على محركات البحث (SEO)</li>
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

export default ElectronicMarketing

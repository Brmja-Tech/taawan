import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon';
import { Link } from 'react-router-dom';

function Consulting() {
  const whatsappLink = 'https://wa.me/+966539822205';
  
  const handleButtonClick = () => {
   
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
<div dir='rtl' >

<div className="text-right mb-8 mt-8 relative service -tracking-tight feat">
    <h2 className="text-lg  mt-3 md:mt-0   md:text-2xl md:mx-1 font-bold text-black">الإستشارات وصناعة البراند</h2>
    <div className='flex items-center my-2'>
    <Link to="/ourservices" className='text-[#5E5B62] text-sm '>خدماتنا</Link>
    <Icon name="arrowlft" size={12} />
    </div>

  </div>

  <div className='feat'>
  <div className="flex-col justify-center items-end h-full">
  <Image name="img8detalis" className="max-w-full max-h-full" />
  <h4 className='text-[#3C3C43] text-2xl mt-10'>الإستشارات وصناعة البراند</h4> 
  <p className='text-[#5E5B62] text-lg my-10'>الإستشارات وصناعة البراند تتعلق بتقديم استراتيجيات وتوجيهات للشركات في بناء وتطوير هويتها التجارية، بدءًا من تحليل السوق وتحديد قيم العلامة التجارية إلى تصميم رسائل تسويقية متميزة تعزز مكانتها التنافسية وتساعد في التواصل الفعّال مع الجمهور المستهدف.</p>
</div>

  </div>
  <div className='feat'>
    <h4 className='text-[#3C3C43] text-xl my-5'>الباقات</h4>

    <div className="flex flex-col lg:flex-row gap-6 mx-5 parent mb-10">
          

          {/* 1 Card */}
          <div className="bg-[#EBEDF0] w-full lg:w-1/3 p-6 flex flex-col  justify-between relative overflow-hidden ">
            <div>
                <h3 className="text-xl font-bold mx-2">برنامج الإستشارات</h3>
              <div className="border border-[#312E36] my-6"></div>

              <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8 mb-60 ">
                <li className='mb-3 mx-3'>الإستشارات الإدارية</li>
                <li className='mb-3 mx-3'>إستشارات تقنية المعلومات</li>
                <li className='mb-3 mx-3'>إستشارات مالية ومحاسبية</li>
              </ul>

       </div>
       <div className='flex justify-center'>
         <button onClick={handleButtonClick} className='bg-[#C7B349] text-white text-lg px-[50px] py-[4px]'>تواصل الآن</button>
         </div>

          </div>

          {/* 2 Card */}
          <div className="bg-[#EBEDF0] w-full lg:w-1/3 p-6 flex flex-col  justify-between relative overflow-hidden ">
            <div>
                <h3 className="text-xl font-bold mx-2">صناعة البراند</h3>
              <div className="border border-[#312E36] my-6"></div>

              <ul className="list-disc list-inside text-[#3C3C43] text-sm mt-8  mb-60 ">
              <li className='mb-3 mx-3'>إستراتيجية الهوية والبراند</li>
                <li className='mb-3 mx-3'>تصميم الشعار</li>
                <li className='mb-3 mx-3'>التصميم البصرى للهوية</li>
                <li className='mb-3 mx-3'>إعداد دليل الهوية المؤسسية</li>
                <li className='mb-3 mx-3'>تحليل السوق والمنافسين</li>
                <li className='mb-3 mx-3'>إدارة السمعة الرقمية</li>
                <li className='mb-3 mx-3'>إطلاق الحملات الترويجية للبراند</li>
                <li className='mb-3 mx-3'>الإستشارات التسويقية</li>
                <li className='mb-3 mx-3'>إدارة العلامة التجارية عبر الزمن</li>
                <li className='mb-3 mx-3'>تحليل الأداء وقياس النجاح</li>
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

export default Consulting

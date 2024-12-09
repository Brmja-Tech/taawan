import React from 'react'
import Image from '../../lib/ImgComp/Image'


function Blog() {
  return (
    <>
        <div className="text-right mb-8 relative service -tracking-tight feat">
    <h2 className="text-2xl mx-2 font-bold text-black">المدونة</h2>
  </div>
<div dir='rtl' className='feat mx-4 ' >
<Image name='frame4' className='' />
<div dir='rtl' className='bg-[#5E5B62] flex justify-between items-center w-[56%]' >
  <p>info@tawan.sa</p>
  <p>5 يناير 2025</p>
</div>
<div dir='rtl'>
  <h6 className='text-base my-6'>
  هذا النص هو مثال لعنوان المقالة
  </h6>
  <p className=' text-lg text-[#5E5B62] mb-20'>
  تقدم الشركة الحلول المناسبة للشركات وتساعدها على تقليل التكاليف وزيادة الإيرادات وبناء إسم <br /> تجارى قوى من خلال فريق عمل لديهم الكفاءة والمهارة وخبرة فى تطوير وإدارة الشركات
  </p>
</div>
</div>
      
    </>
  )
}

export default Blog

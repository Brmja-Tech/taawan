import React from 'react'
import Image from '../../lib/ImgComp/Image'


function OurServices() {
  return (
    <>
      <div className="text-right mb-8 relative service -tracking-tight feat">
    <h2 className="text-2xl mx-2 font-bold text-black">المدونة</h2>
  </div>
<div dir='rtl' className='feat mx-4 ' >
<Image name='frame4' className='' />
<div dir='rtl' className='bg-[#5E5B62] flex justify-between items-center' >
  <p>info@tawan.sa</p>
  <p>5 يناير 2025</p>
</div>
<div dir='rtl'>
  <h6>
  هذا النص هو مثال لعنوان المقالة
  </h6>

  <p>
  تقدم الشركة الحلول المناسبة للشركات وتساعدها على تقليل التكاليف وزيادة الإيرادات وبناء إسم تجارى قوى من خلال فريق عمل لديهم الكفاءة والمهارة وخبرة فى تطوير وإدارة الشركات
  </p>
</div>
</div>




    </>
  )
}

export default OurServices

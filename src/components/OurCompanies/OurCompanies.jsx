import React from 'react'
import Image from '../../lib/ImgComp/Image'
import Icon from '../../lib/IconComp/Icon'



export default function OurCompanies() {
  return (
    <>
    <div className="p-6">
    <div className="text-right mb-8 relative companies -tracking-tight feat">
    <h2 className="text-2xl mx-2 font-bold text-black">عملائنا</h2>
  </div>
  <div dir='rtl'  className="flex flex-wrap justify-between items-center gap-6 my-16 feat">
   
    <div className="  flex flex-col #EBEDF0 items-center w-full md:w-[30%] p-6 border border-[#EBEDF0] ">
      <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-24">
      <Image name='taawan' className='border-8 rounded-full border-[#F6F6F6] '   />
      </div>
      <div className='border-2 border-[#EBEDF0] w-full '></div>
        <div className='mt-5'>
        <h3 className="text-lg text-right font-bold text-black mb-3">شركة تعاون</h3>
      <p className="text-sm text-gray-600 mb-24">
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها <br /> التطبيق.
      </p>
        </div>
     
    </div>

    
    <div className="  flex flex-col #EBEDF0 items-center w-full md:w-[30%] p-6 border border-[#EBEDF0] ">
      <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-24">
      <Image name='itqaan' className='border-8 rounded-full border-[#F6F6F6]'   />
      </div>
      <div className='border-2 border-[#EBEDF0] w-full '></div>
        <div className='mt-5'>
        <h3 className="text-lg text-right font-bold text-black mb-3">شركة إتقان </h3>
      <p className="text-sm text-gray-600 mb-24">
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها <br /> التطبيق.
      </p>
        </div>
     
    </div>

    
    <div className="  flex flex-col #EBEDF0 items-center w-full md:w-[30%] p-6 border border-[#EBEDF0] ">
      <div className="w-24 h-24 mb-4 flex items-center justify-center rounded-full py-24">
      <Image name='greenhome' className='border-8 rounded-full border-[#F6F6F6]'  />
      </div>
      <div className='border-2 border-[#EBEDF0] w-full '></div>
        <div className='mt-5'>
        <h3 className="text-lg text-right font-bold text-black mb-3">شركة جرين هوم </h3>
      <p className="text-sm text-gray-600 mb-24">
      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها <br /> التطبيق.
      </p>
        </div>
     
    </div>
  </div>
  {/* الأسهم */}
  {/* <div className="flex justify-between items-center mt-6">
    <button className="p-2 bg-white border rounded-full shadow-lg">
      <Icon name="arrowleft" size={24} />
    </button>
    <button className="p-2 bg-white border rounded-full shadow-lg">
      <Icon name="arrowleft" size={24} />
    </button>
  </div> */}
</div>

    </>
  )
}

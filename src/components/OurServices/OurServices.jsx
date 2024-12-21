import React, { useState } from 'react'
import Icon from '../../lib/IconComp/Icon';
import Image from '../../lib/ImgComp/Image';
import { Link, useNavigate } from 'react-router-dom';

const servicesData = [
  {
    title: 'الخدمات المحاسبية',
    description: 'تسجيل المعاملات المالية، إعداد التقارير والميزانيات، إدارة الضرائب',
    imgName: 'service2',
    link: '/servicedetails',
  },
  {
    title: 'إدارة الموارد البشرية',
    description: 'تنظيم وتطوير القوى العاملة من خلال التوظيف، التدريب، تقييم الأداء',
    imgName: 'img7',
    link: '/resourcesmanagement',
  },
  {
    title: 'الحوكمة',
    description: 'نظام يحدد الضوابط والإجراءات لضمان الشفافية والمسؤولية والنزاهة',
    imgName: 'img1',
    link: '/governance',
  },
  {
    title: 'تأسيس المنشآت',
    description: 'تسجيل الكيان التجاري، تحديد نوعه، ووضع الأسس التنظيمية لبدء نشاطه',
    imgName: 'img2',
    link: '/establishment',
  },
  {
    title: 'إدارة المشاريع',
    description: 'عملية تخطيط وتنظيم وتنفيذ ومراقبة المشاريع لضمان تحقيق الأهداف',
    imgName: 'img3',
    link: '/projectManagement',
  },
  {
    title: 'إدارة المصانع',
    description: 'عملية تنظيم وتوجيه جميع الأنشطة المتعلقة بتصنيع المنتجات',
    imgName: 'img4',
    link: '/factoryManagement',
  },
  {
    title: 'التسويق الإلكترونى',
    description: 'استخدام أدوات وتقنيات عبر الإنترنت للترويج للمنتجات والتصميم الدعائى لها',
    imgName: 'img8',
    link: '/electronicMarketing',
  },
  {
    title: 'تقنية المعلومات',
    description: 'تقدم حلولًا ودعمًا تكنولوجيًا تشمل البرمجيات، الشبكات، الأمن',
    imgName: 'img5',
    link: '/Informationtechnology',
  },
  {
    title: 'الإستشارات وصناعة البراند',
    description: 'تساعد الشركات في تطوير استراتيجيات وهوية قوية لعلامتها التجارية',
    imgName: 'img6',
    link: '/consulting',
  },
];

function OurServices() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const foundService = servicesData.find(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundService) {
      navigate(foundService.link); 
    } else {
      alert("لا توجد نتائج مطابقة"); 
    }
  };

  
  const filteredServices = servicesData.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div dir="rtl" className="md:flex justify-between items-center feat my-10">
        <div className="text-right mb-8 relative service -tracking-tight feat">
          <h2 className="text-lg md:text-2xl mt-4 md:mt-0 mx-1 font-bold text-black">خدماتنا</h2>
        </div>
        <div className="flex items-center bg-[#EBEDF0] rounded-[50px] py-[12px] md:px-[25px]">
          <Icon name="searchblack" size={18} className="ml-2 md:ml-3" />
          <input
            type="text"
            placeholder="بحث عن خدمة"
            className="bg-transparent border-none flex-1 outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <span
            className="mr-4 md:mr-8 text-[#AC8B2E] cursor-pointer"
            onClick={handleSearchClick}
          >
            بحث
          </span>
        </div>
      </div>

      <div dir="rtl" className="flex flex-wrap gap-12 justify-center items-center my-10">
        
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <Link key={index} to={service.link}>
              <div className="relative w-full overflow-hidden group">
                <div className="relative w-full transition-transform duration-500 group-hover:translate-y-[-20px]">
                  <Image name={service.imgName} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-bold text-right mb-2">{service.title}</h3>
                    <p className="text-sm text-right">{service.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-lg text-gray-600">لا توجد نتائج مطابقة</p>
        )}
      </div>
    </>
  );
}

export default OurServices;

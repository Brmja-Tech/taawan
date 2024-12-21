import React from "react";
import Image from "../../lib/ImgComp/Image";
import { Link, useNavigate } from "react-router-dom";
import OurVision from "../OurVision/OurVision";

function WhoAreWe() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("../OurServices");
  };
  return (
    <>
      <div
        dir="rtl"
        className="flex flex-col md:flex-row  justify-center my-20 feat  "
      >
        <div className="w-full md:w-1/2 relative man -tracking-tight order-2 md:order-1 ">
          <h3 className="text-lg md:text-6xl mb-4 md:mb-14">من نحن</h3>
          <p className="text-lg md:text-2xl mb-4 md:mb-12">
            شركة تعاون المتطورة لخدمات الأعمال{" "}
          </p>
          <p className="text-base md:text-lg text-[#3C3C43] mb-4 md:mb-12 ">
            شركة ذات مسئولية محدودة بمدينة الرياض نهدف لتقديم خدمات <br />{" "}
            للشركات فى كافة القطاعات وكافة الانشطة كما اننا نقدم خدمات <br />{" "}
            استشارة للإدارات العليا متخصصة وذلك من خلال خبراء متخصصون <br /> فى
            تطوير الشركات .
          </p>
          <p className="text-base md:text-lg text-[#3C3C43] mb-4 md:mb-12 ">
            تقدم الشركة الحلول المناسبة للشركات وتساعدها على تقليل <br />
            التكاليف وزيادة الإيرادات وبناء إسم تجارى قوى من خلال فريق عمل{" "}
            <br /> لديهم الكفاءة والمهارة وخبرة فى تطوير وإدارة الشركات
          </p>
          <Link
            onClick={handleClick}
            className="bg-[#AC8B2E] inline-block text-white ml-5 mt-14 py-2 px-14 relative group"
          >
            خدماتنا
            <span className="absolute bottom-0 left-0 w-full h-full bg-white opacity-50 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
          </Link>
        </div>

        <div className="w-full md:w-1/2 flex-col  gap-3 md:gap-6 order-1 md:order-2">
          <div className="flex flex-row w-1/2 gap-3">
            <Image
              name="frame"
              className="w-full rounded-[34px] opacity-[25%]"
            />
            <Image name="whoarewe1" className="w-full" />
          </div>
          <div className="w-full flex mt-3">
            <Image name="whoarewe2" className="w-full" />
          </div>
        </div>
      </div>
      <div className="my-24">
        <OurVision />
      </div>

      <div
        dir="rtl"
        className="flex flex-col-reverse md:flex-row justify-center items-center my-20 feat"
      >
        <div className="w-full md:w-1/2 relative man">
          <h3 className="text-xl md:text-[40px] mb-4 md:mb-14 font-bold leading-relaxed">
            لماذا نحن ؟
          </h3>

          <div className="flex items-center mb-4 md:mb-14">
            <p className="bg-[#C7B349] rounded-full text-white w-12 h-12 flex items-center justify-center border-4 border-white mr-4 min-w-[48px] min-h-[48px]">
              1
            </p>
            <p className=" text-sm md:text-[18px] text-[#3C3C43] leading-relaxed">
              شركة تعاون لخدمات الاعمال تقدم حلولا متطورة للمنشأت وتحسن من
              ادائها عبر العديد من الخدمات والحلول الاستراتيجية بالاضافة الي
              تزويد اصحاب الشركات بالافكار التي تعزز من ارباحهم وخدماتهم للعملاء
            </p>
          </div>

          <div className="flex items-center mb-4 md:mb-14">
            <p className="bg-[#C7B349] rounded-full text-white w-12 h-12 flex items-center justify-center border-4 border-white mr-4 min-w-[48px] min-h-[48px]">
              2
            </p>
            <p className=" text-sm md:text-lg text-[#3C3C43] leading-relaxed">
              فريق عمل متخصص في كافة المجالات مما يساعد الشركات علي <br />
              تقليل التكاليف وزيادة الايرادات وبناء اسم تجاري قوي
            </p>
          </div>

          <div className="flex items-center mb-4 md:mb-14">
            <p className="bg-[#C7B349] rounded-full text-white w-12 h-12 flex items-center justify-center border-4 border-white mr-4 min-w-[48px] min-h-[48px]">
              3
            </p>
            <p className=" text-sm md:text-lg text-[#3C3C43] leading-relaxed">
              نجمع بين الكفاءه المهنية والخبرة العملية التي <br />
              تؤهلنا لمساعدة عملاؤنا في التطور دائما
            </p>
          </div>

          <div className="flex items-center mb-4 md:mb-14">
            <p className="bg-[#C7B349] rounded-full text-white w-12 h-12 flex items-center justify-center border-4 border-white mr-4 min-w-[48px] min-h-[48px]">
              4
            </p>
            <p className=" text-sm md:text-lg text-[#3C3C43] leading-relaxed">
              نسعي جاهدين للتميز لضمان رضا العميل
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Image name="frame125" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default WhoAreWe;

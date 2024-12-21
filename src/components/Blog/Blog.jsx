import React from "react";
import Image from "../../lib/ImgComp/Image";
import Icon from "../../lib/IconComp/Icon";

function Blog() {
  return (
    <>
      <div dir="rtl">
        <div className="text-right mb-8 relative service -tracking-tight feat">
          <h2 className="text-lg  mt-3 md:mt-0   md:text-2xl md:mx-1 font-bold text-black">
            المدونة
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg1" className="w-full" />
              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  الخدمات المحاسبية
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                الخدمات المحاسبية هي مجموعة من الأنشطة التي تهدف إلى تنظيم
                وإدارة الشؤون المالية للمؤسسات والأفراد. تشمل هذه الخدمات إعداد
                القوائم المالية، التدقيق المحاسبي، الاستشارات الضريبية، والتحليل
                المالي. تقدم الشركات المحاسبية الدعم في متابعة المعاملات
                المالية، وتحليل التكاليف والإيرادات، والتأكد من الامتثال
                للمعايير المحاسبية والتشريعات الضريبية. تساعد هذه الخدمات في
                تحسين اتخاذ القرارات المالية وتعزيز الكفاءة المالية، مما يساهم
                في استدامة النمو وتحقيق الأهداف الاستراتيجية.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg2" className="w-full" />

              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  إدارة الموارد البشرية
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                إدارة الموارد البشرية هي عملية تنظيم وتوجيه الأفراد داخل المنظمة
                لضمان تحقيق الأهداف الاستراتيجية لها. تشمل هذه العملية عدة
                مجالات مثل التوظيف، التدريب والتطوير، تقييم الأداء، تحفيز
                الموظفين، وإدارة علاقات العمل. تهدف إدارة الموارد البشرية إلى
                تحسين الكفاءة التنظيمية من خلال الاهتمام بالعوامل البشرية، وضمان
                بيئة عمل منتجة ومحفزة، والتأكد من التزام الموظفين بالسياسات
                والمعايير التي تساهم في نجاح المؤسسة.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg3" className="w-full" />

              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">الحوكمة</h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                الحوكمة هي مجموعة من الأنظمة والممارسات التي تهدف إلى تنظيم
                وتوجيه الأنشطة داخل المؤسسات لضمان تحقيق الشفافية، والمساءلة،
                والمشاركة في اتخاذ القرارات. تركز الحوكمة على تعزيز الفعالية
                التنظيمية، الالتزام بالقوانين، وحماية حقوق الأطراف المعنية مثل
                المساهمين، والموظفين، والعملاء. من خلال إطار عمل مؤسسي عادل،
                تساعد الحوكمة في تحسين الأداء المؤسسي، تعزيز الثقة العامة،
                وتقليل المخاطر المالية والتشغيلية.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg4" className="w-full" />

              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  تأسيس المنشآت
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                تأسيس المنشآت هو عملية إنشاء الشركات أو المؤسسات بدءًا من اختيار
                الفكرة التجارية وإعداد خطة العمل، مرورًا بإجراءات التراخيص
                القانونية مثل التسجيل وفتح الحسابات البنكية، وصولًا إلى تحديد
                الهيكل التنظيمي والإداري. يشمل تأسيس المنشآت أيضًا تحديد الأنشطة
                التي ستقوم بها الشركة، وتوظيف الكوادر البشرية، وتحديد الموارد
                المالية والتقنية اللازمة، لضمان نجاح المشروع واستدامته. الهدف هو
                تأسيس كيان قانوني يعمل على تحقيق الأهداف التجارية والتوسع في
                السوق.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg5" className="w-full" />

              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  إدارة المشاريع
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                إدارة المشاريع هي عملية تخطيط وتنظيم وتنفيذ ومراقبة مشاريع محددة
                لتحقيق أهداف معينة ضمن جدول زمني وميزانية وموارد معينة. تشمل
                إدارة المشاريع مراحل رئيسية مثل تحديد الأهداف، وضع خطة العمل،
                توزيع المهام، متابعة الأداء، والتعامل مع المخاطر والتحديات. تهدف
                إلى تحقيق نتائج فعالة ومرضية لجميع الأطراف المعنية، مع الحفاظ
                على جودة العمل واحترام الموارد المتاحة.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg6" className="w-full" />

              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  إدارة المصانع
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                إدارة المصانع هي عملية تنظيم وتنسيق الأنشطة المتعلقة بتصنيع
                المنتجات داخل المنشآت الصناعية. تشمل هذه العملية تخطيط الإنتاج،
                مراقبة الجودة، صيانة المعدات، إدارة المخزون، وتوزيع المهام بين
                العاملين لضمان سير العمل بكفاءة. تهدف إدارة المصانع إلى تحسين
                الإنتاجية وتقليل التكاليف، مع الحفاظ على أعلى معايير الجودة
                والسلامة. كما تركز على تنفيذ استراتيجيات لتحسين الأداء المؤسسي
                والتكيف مع التغيرات في السوق والتكنولوجيا.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg7" className="w-full" />

              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  التسويق الإلكترونى
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                التسويق الإلكتروني هو استخدام الوسائل الرقمية والتقنيات الحديثة
                للترويج للمنتجات والخدمات عبر الإنترنت. يشمل استراتيجيات مثل
                تحسين محركات البحث (SEO)، التسويق عبر وسائل التواصل الاجتماعي،
                الإعلان الرقمي، البريد الإلكتروني، والتسويق عبر المحتوى. يهدف
                التسويق الإلكتروني إلى الوصول إلى جمهور أوسع وزيادة التفاعل مع
                العملاء، مما يعزز العلامة التجارية ويزيد من المبيعات والعائدات
                باستخدام منصات الإنترنت المختلفة.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg8" className="w-full" />

              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  تقنية المعلومات
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                تقنية المعلومات هي مجال يشمل استخدام وتطوير الأنظمة الرقمية
                للتعامل مع البيانات والمعلومات. يتضمن ذلك البرمجيات، الأجهزة،
                الشبكات، وأمن المعلومات. تهدف تقنية المعلومات إلى تحسين الكفاءة
                التنظيمية من خلال تسهيل إدارة البيانات وتوفير حلول مبتكرة،
                بالإضافة إلى ضمان حماية المعلومات وضمان استمرارية الأعمال. تساهم
                هذه التقنية في تحسين الأداء التشغيلي، دعم اتخاذ القرارات، وتحقيق
                الأهداف الاستراتيجية للمنظمات في مختلف القطاعات.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-1 mb-8 feat">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <Image name="blogImg9" className="w-full" />
              <div className="absolute bottom-0 w-full bg-[#5E5B62] text-white flex justify-between items-center px-6 py-1 md:py-3 text-sm">
                <p>info@tawan.sa</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 my-2 md:my-0">
            <div className="ms-5">
              <div className="flex justify-between items-center">
                <h6 className="text-base md:text-lg text-black">
                  الإستشارات وصناعة البراند
                </h6>
                <Icon name="arrowUp" size={18} />
              </div>

              <p className="text-justify text-justify-inter-word text-sm md:text-base text-[#5E5B62] leading-relaxed mt-2">
                الإستشارات وصناعة البراند تتعلق بتقديم استراتيجيات وأفكار لتطوير
                هوية العلامة التجارية وبنائها بطريقة تعكس قيمتها وتميزها في
                السوق. تشمل الخدمات استراتيجيات التسويق، تحليل المنافسين، تصميم
                الشعار، تحديد الرسائل الأساسية، وتطوير استراتيجية التواصل مع
                الجمهور المستهدف. تهدف هذه العملية إلى خلق صورة قوية للعلامة
                التجارية تساهم في تعزيز ثقة العملاء، وتوسيع الحصة السوقية،
                وزيادة الوعي بالمنتجات والخدمات المقدمة.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

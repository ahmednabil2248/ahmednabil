import React from "react";
import Head from "next/head";
import Link from "next/link";

import MasonryLayout from "../../components/utilty/MasonryLayout";

import { FaFacebookF } from "react-icons/fa";

import { useRouter } from "next/router";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";
import { img1, img2, img3, img4, img6 } from "../../public/asset/Cares";

const Imagess = [
  "/asset/facebook page/1.PNG",
  "/asset/facebook page/2.PNG",
  "/asset/facebook page/3.PNG",
  "/asset/facebook page/4.PNG",
  "/asset/facebook page/5.PNG",
];

const Details = () => {
  const router = useRouter();
  const Path = router.query.Ourservice;
  let lang = router.locale === "ar";

  return (
    <div>
      <Head>
        <title>Details</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {Path === "Contact Lenses" && (
        <>
          <ServiceDetails
            dec="If you are tired of wearing glasses, contact lenses may be right for you. Contact lenses are the no-surgery way to correct your vision and ditch your glasses! Contact lenses are great for those with active lifestyles."
            ardec="إذا كنت سئمت من ارتداء النظارات ، فقد تكون العدسات اللاصقة مناسبة لك. العدسات اللاصقة هي وسيلة عدم الجراحة لتصحيح رؤيتك والتخلص من نظاراتك! العدسات اللاصقة رائعة لأولئك الذين لديهم أنماط حياة نشطة."
            image={img1}
            image1={Imagess}
          />

          <div className="px-5 py-8">
            <h1 className="font-extrabold text-[25px] pb-5 max-w-3xl mx-auto flex flex-col justify-center items-center">
              We offer special offers and discounts on lenses at amazing prices,
              just visit our Facebook page
              <Link
                href="https://www.facebook.com/Dr-eye-939412789781926"
                passHref
              >
                <FaFacebookF
                  fontSize={50}
                  className="border border-red-500 rounded p-2 cursor-pointer hover:bg-red-800 hover:text-white duration-500"
                />
              </Link>
            </h1>
            <MasonryLayout imagee={Imagess} />
          </div>
        </>
      )}

      {Path === "LASIK" && (
        <>
          <ServiceDetails
            dec="LASIK surgery is one of the most common and popular refractive surgeries today. Are you tired of wearing glasses or contact lenses? LASIK may be the answer. LASIK surgery aims to reshape the cornea, so that light can be properly reflected onto the retina. This allows for sharp and clear vision at all distances. If you are interested in this amazing procedure, call Primary Eyecare Associates today to set up your LASIK consultation."
            ardec="تعتبر جراحة الليزك واحدة من العمليات الجراحية الانكسارية الأكثر شيوعًا وشعبية اليوم. هل سئمت من ارتداء النظارات أو العدسات اللاصقة؟ قد يكون الليزك هو الجواب. تهدف جراحة الليزك إلى إعادة تشكيل القرنية ، بحيث يمكن أن ينعكس الضوء بشكل صحيح على شبكية العين. هذا يسمح برؤية حادة وواضحة في جميع المسافات. إذا كنت مهتمًا بهذا الإجراء المذهل ، فاتصل بـ Primary Eyecare Associates اليوم لإعداد استشارة LASIK الخاصة بك."
            image={img2}
          />
        </>
      )}

      {Path === "Orthokeratology (CRT & VST)" && (
        <>
          <ServiceDetails
            dec="Corneal Refractive Therapy or CRT is a non-surgical procedure involving wearing specialized contact lenses while sleeping. The contact lenses reshape the cornea so that the patient sees well without contact lenses or glasses during the day. It is intended mainly for mild to moderately nearsighted patients who may also have small amounts of astigmatism."
            ardec="يعد العلاج الانكساري للقرنية أو CRT إجراءً غير جراحي يتضمن ارتداء عدسات لاصقة متخصصة أثناء النوم. تقوم العدسات اللاصقة بإعادة تشكيل القرنية بحيث يرى المريض جيدًا بدون العدسات أو النظارات اللاصقة أثناء النهار. يهدف بشكل أساسي إلى المرضى المعتدلين إلى القريب من النظر إلى المعتاد الذين قد يكون لديهم أيضًا كميات صغيرة من الاستجماتيزم."
            image={img3}
          />
        </>
      )}

      {Path === "Pediatric Eye Exams" && (
        <>
          <ServiceDetails
            dec="According to experts, 80% of learning is visual, which means that if your child is having difficulty seeing clearly, his or her learning can be affected. This also goes for infants who develop and learn about the world around them through their sense of sight. To ensure that your children have the visual resources they need to grow and develop normally, their eyes and vision should be checked by an eye doctor at certain stages of their development."
            ardec="وفقًا للخبراء ، فإن 80 ٪ من التعلم مرئي ، مما يعني أنه إذا كان طفلك يواجه صعوبة في الرؤية بوضوح ، فقد يتأثر تعلمه. هذا أيضًا ينطبق على الرضع الذين يتطورون ويتعلمون عن العالم من حولهم من خلال شعورهم بالبصر. للتأكد من أن أطفالك لديهم الموارد البصرية التي يحتاجون إليها للنمو والتطور بشكل طبيعي ، يجب فحص عيونهم ورؤيتهم من قبل طبيب العيون في مراحل معينة من تطورهم."
            image={img4}
          />
        </>
      )}

      {Path === "Comprehensive Eye Exams" && (
        <>
          <ServiceDetails
            dec="Comprehensive eye examinations are much more than just getting a glasses prescription. The doctors thoroughly examine the front and back part of the eye for any eye or systemic diseases and also screen for glaucoma. In fact, determining a glasses prescription is a separate procedure from an eye examination and is called a refraction. Many times the doctors will perform a refraction at the same time as a comprehensive eye examination, depending on the needs of the patient."
            ardec="فحوصات العين الشاملة هي أكثر بكثير من مجرد الحصول على وصفة طبية للنظارات. يفحص الأطباء جيدًا الجزء الأمامي والخلفي من العين لأي أمراض عين أو شاشة أيضًا للزرق. في الواقع ، فإن تحديد وصفة نظارة هو إجراء منفصل عن فحص العين ويسمى الانكسار. في كثير من الأحيان ، سيقوم الأطباء بإجراء انكسار في نفس الوقت الذي يقوم فيه فحص شامل للعين ، اعتمادًا على احتياجات المريض."
            image={img6}
          />
        </>
      )}
    </div>
  );
};

export default Details;

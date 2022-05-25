import React from "react";
import Image from "next/image";
import Care from "../../public/asset/Cares/Fet-png.png";
import Scroll from "../Navbar/Scroll";
import { useRouter } from "next/router";
import { BsArrowDownShort } from "react-icons/bs";

const AboutUs = () => {
  const router = useRouter();
  const Lang = router.locale === "ar";
  return (
    <div className="max-w-5xl mx-auto my-24 px-5 md:p-0" id="About-Us">
      <div className="w-[200px] mx-auto hover:shadow-xl hover:animate-bounce">
        <h1 className="text-[#5B7DB1]  text-[28px] font-bold mb-5 border border-[#5B7DB1]">
          {Lang ? "عنا" : " About Us"}
        </h1>
      </div>

      <div className="flex flex-col  space-y-5 md:space-y-0 md:flex-row items-center pt-5">
        <div>
          <Image src={Care} alt="Fet" />
        </div>
        <div>
          {Lang ? (
            <p className=" max-w-3xl leading-8 mb-5 md:text-left md:ml-16 font-semibold text-[20px] ">
              الدكتور أحمد نبيل عيادة العين يرحب بك! نحن سعداء لأنك قررت زيارة
              عيادتنا ، ونعد بتقديم أفضل خدمة طبية وإنسانية ممكنة ، وسنمنحك أفضل
              رعاية وسوف يتم فصحك على أحدث الطرق العلمية ، وإجراءات طب العيون
              التشخيصية الشاملة. سواء كان إجراء إجراءات جراحية معقدة أو فحصًا
              روتينيًا للعين ، فإننا ملتزمون تمامًا بتقديم أقصى درجات العناية
              بالعيون.
            </p>
          ) : (
            <p className=" text-center max-w-3xl leading-8 mb-5 md:text-left md:ml-16 font-semibold text-[20px] ">
              Dr. Ahmed Nabil Eye Clinic welcomes you! We’re glad you decided to
              visit our clinic, and we promise to offer the best possible
              medical and humane service,we will give you the best care and you
              will be exposed in the latest scientific methods,comprehensive
              diagnostic and surgical ophthalmology procedures. Whether
              performing complex surgical procedures or a routine eye exam,We
              are thoroughly committed to deliver the utmost eye care.
            </p>
          )}

          <Scroll
            to="service"
            smooth={true}
            offset={0}
            duration={500}
            className="text-[25px] mx-auto flex flex-col items-center"
          >
            <button className="cursor-pointer bg-[#5B7DB1] px-8 py-1 rounded font-semibold text-white hover:text-black hover:bg-none  duration-700 border border-black">
              <h1 className="hover:opacity-[0.9]">
                {Lang ? "خدماتنا" : "Our service"}
              </h1>
            </button>
            <BsArrowDownShort
              className="animate-bounce font-extrabold shadow-md"
              fontSize={50}
            />
          </Scroll>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import AboutUs from "../components/About/AboutUs";
import Appointment from "../components/Appointment/Appointment";
import OpiningHours from "../components/OpiningHours/OpiningHours";
import Service from "../components/OurService/Service";
import Slideshow from "../components/Slideshow";
import { img1, img2, img3, img4, img5, img6 } from "../public/asset/Cares";

const Home = () => {
  const router = useRouter();

  let lang = router.locale === "ar";
  return (
    <>
      <Head>
        <title>ANI Clinic</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Slideshow />

      <AboutUs />
      <div className="max-w-5xl mx-auto my-16  flex flex-col items-center justify-center ">
        <div className="w-[200px] mx-auto hover:shadow-xl hover:animate-bounce my-5">
          <h1 className="text-[#5B7DB1] text-[28px] font-bold border border-[#5B7DB1]">
            {lang ? "خدماتنا" : " Our Eye Cares"}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-5  mb-5 ">
          <Service
            title={lang ? "العدسات اللاصقة" : "Contact Lenses"}
            title2={"Contact Lenses"}
            image={img1}
          />

          <Service
            title={lang ? "الليزك" : "LASIK"}
            image={img2}
            title2={"LASIK"}
          />

          <Service
            title={lang ? "علم تقويم العظام" : "Orthokeratology (CRT & VST)"}
            title2={"Orthokeratology (CRT & VST)"}
            image={img3}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-5 ">
          <Service
            title={lang ? "امتحانات العين عند الأطفال" : "Pediatric Eye Exams"}
            title2={"Pediatric Eye Exams"}
            image={img4}
          />

          <Service
            title={lang ? "لفحوصات العين الشاملة" : "Comprehensive Eye Exams"}
            title2={"Comprehensive Eye Exams"}
            image={img6}
          />
        </div>
      </div>
      <OpiningHours />
    </>
  );
};

export default Home;

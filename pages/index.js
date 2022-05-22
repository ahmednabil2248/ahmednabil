import Head from "next/head";
import React from "react";
import AboutUs from "../component/About/AboutUs";
import Appointment from "../component/Appointment/Appointment";
import OpiningHours from "../component/OpiningHours/OpiningHours";
import Service from "../component/OurService/Service";
import Slideshow from "../component/Slideshow";
import { img1, img2, img3, img4, img5, img6 } from "../public/asset/Cares";

const Home = () => {
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
            Our Eye Cares
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-5  mb-5 ">
          <Service title="Contact Lenses" image={img1} />

          <Service title="LASIK" image={img2} />

          <Service title="Orthokeratology (CRT & VST)" image={img3} />
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-5 ">
          <Service title="Pediatric Eye Exams" image={img4} />

          <Service title="Comprehensive Eye Exams" image={img6} />
        </div>
      </div>
      <OpiningHours />
    </>
  );
};

export default Home;

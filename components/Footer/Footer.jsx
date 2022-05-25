import React from "react";
import Image from "next/image";
import logo from "../../public/asset/EyeLogo.png";
import Scroll from "../../components/Navbar/Scroll";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { BiMobile } from "react-icons/bi";

import { HiLocationMarker } from "react-icons/hi";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  let lang = router.locale === "ar";
  return (
    <>
      <footer className="pt-5  md:px-[5rem] dark:bg-gray-800 bg-[#5B7DB1] overflow-hidden">
        <div className="md:flex md:justify-around">
          <div className=" flex mb-12 justify-center md:hidden md:mb-0">
            <Link href="/" passHref>
              <div className="flex space-x-3 cursor-pointer">
                <Image
                  src={logo}
                  className="mr-3 h-8"
                  alt="FlowBite Logo"
                  width={70}
                  height={70}
                />

                <span className="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">
                  ANI Clinic
                </span>
              </div>
            </Link>
          </div>
          <div className="flex flex-col justify-around w-full space-y-9 md:flex-row md:space-y-0">
            <div>
              <h2 className="mb-6 text-xl font-extrabold text-black uppercase dark:text-white">
                {lang ? "معلومات التواصل" : "Contact Info"}
              </h2>
              <ul className="text-black dark:text-gray-400">
                <li className="mb-4 flex flex-col justify-center items-center font-semibold space-y-5">
                  <div className="flex">
                    <span>
                      <HiLocationMarker fontSize={30} className="mr-2" />
                    </span>
                    <span>
                      {lang
                        ? "10 شارع حمدي جودة أبو أشرف "
                        : "10 Hamdi Jouda Abu Ashraf Street"}
                    </span>
                  </div>
                  <div className="flex">
                    <span>
                      <HiLocationMarker fontSize={30} className="mr-2" />
                    </span>
                    <span>
                      {lang
                        ? "93 ميدان الميرغنى مستشفى نور الحياة"
                        : "93 El Merghany Square, Nour Al Hayat Hospital"}
                    </span>
                  </div>
                </li>

                <li className="mb-4 flex justify-center items-center font-semibold ">
                  <span>
                    <BiMobile fontSize={30} className="mr-2" />
                  </span>
                  <span>01125495594</span>
                </li>

                <li className="mb-4 flex justify-center items-center font-semibold cursor-pointer w-10 mx-auto ">
                  <Link href="https://www.facebook.com/David.nabill" passHref>
                    <FaFacebookF fontSize={30} className="mr-2" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-xl font-extrabold text-black  uppercase dark:text-white">
                {lang ? "خدماتنا" : " Our Eye Cares"}
              </h2>
              <ul className="text-black dark:text-gray-400 space-y-2">
                <li>
                  <Scroll
                    to="service"
                    className="hover:underline  cursor-pointer font-semibold"
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {lang ? " العدسات اللاصقة" : "Contact Lenses"}
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="service"
                    className="hover:underline cursor-pointer font-semibold"
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {lang ? "الليزك" : " LASIK"}
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="service"
                    className="hover:underline cursor-pointer font-semibold"
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {lang ? "علم تقويم العظام" : "Orthokeratology (CRT & VST)"}
                  </Scroll>
                </li>
                <li>
                  <Scroll
                    to="service"
                    className="hover:underline cursor-pointer font-semibold"
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {lang
                      ? "امتحانات العين عند الأطفال"
                      : "Pediatric Eye Exams"}
                  </Scroll>
                </li>

                <li>
                  <Scroll
                    to="service"
                    className="hover:underline cursor-pointer font-semibold"
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    {lang
                      ? "امتحانات العين الشاملة "
                      : " Comprehensive Eye Exams"}
                  </Scroll>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center mx-auto md:mx-1 ">
              <h2 className="mb-6 text-xl font-extrabold  text-black  uppercase dark:text-white">
                {lang ? "خرائط" : " MapPlace"}
              </h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.7836425929086!2d31.25277898576883!3d29.9856472819037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458479d28b09c0d%3A0x39f9a45684596a52!2z2KfZhNi02YfZitivINit2YXYr9mKINis2YjYr9mH2Iwg2YLYs9mFINiv2KfYsSDYp9mE2LPZhNin2YXYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKzYjCDZhdi12LE!5e0!3m2!1sar!2sde!4v1653082458960!5m2!1sar!2sde"
                width="400"
                height="300"
                style={{ border: "0" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <hr className="my-6 border-black sm:mx-auto dark:border-gray-700 lg:my-8" />
      </footer>
    </>
  );
};

export default Footer;

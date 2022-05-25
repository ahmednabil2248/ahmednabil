import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/asset/EyeLogo.png";
import Scroll from "./Scroll";
import Link from "next/link";
import { GrLanguage } from "react-icons/gr";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  let lang = router.locale === "ar";

  return (
    <div className="bg-[#5B7DB1] md:p-0">
      <div className="flex flex-col  md:flex-row md:justify-between items-center  py-2 text-white font-semibold md:text-[18px] px-16">
        <Link href="/" passHref>
          <div className="flex items-center space-x-6 cursor-pointer">
            <Image src={logo} alt="logo" width={100} height={60} />
            <p className="md:text-[22px]">
              {lang ? "الدكتور احمد نابيل" : "Dr Ahmed Nabil"}
            </p>
          </div>
        </Link>

        <div className="space-x-6 flex items-center text-[12px] mt-2 md:mt-0 md:text-xl">
          <div className="hover:hover:text-black duration-500 cursor-pointer">
            <Link href="/" passHref>
              <div>{lang ? "الرئيسيه" : "Home"}</div>
            </Link>
          </div>

          <div className="hover:hover:text-black  duration-500 cursor-pointer ">
            <Link href="/appointment" passHref>
              <div>{lang ? "احجز موعد " : " Book Appointment"}</div>
            </Link>
          </div>

          <div className="hover:hover:text-black  duration-500 cursor-pointer ">
            <Scroll to="service" smooth={true} offset={0} duration={500}>
              {lang ? "خدمات " : " Service"}
            </Scroll>
          </div>

          <div className="hover:hover:text-black  duration-500 cursor-pointer ">
            <Scroll to="About-Us" smooth={true} offset={0} duration={500}>
              {lang ? "عنا " : "  About Us"}
            </Scroll>
          </div>
          <div onClick={() => setMenu(!menu)} className="relative">
            <GrLanguage className="relative" />
          </div>
          {menu && (
            <div className="flex md:flex-col duration-700 absolute top-[100px] md:top-[75px] z-10 right-0">
              {router.locales.map((locale) => (
                <button
                  key={locale}
                  className="bg-black mb-1  rounded px-2"
                  onClick={() => setMenu(false)}
                >
                  <Link href={router.asPath} locale={locale}>
                    {locale === "ar" ? "العربيه" : "الانجليزيه"}
                  </Link>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

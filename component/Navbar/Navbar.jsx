import Image from "next/image";
import logo from "../../public/asset/EyeLogo.png";
import Scroll from "./Scroll";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="  bg-[#5B7DB1] md:p-0">
      <div className="flex flex-col  md:flex-row md:justify-between items-center  py-2 text-white font-semibold md:text-[18px] px-16">
        <Link href="/" passHref>
          <div className="flex items-center space-x-6 cursor-pointer">
            <Image src={logo} alt="logo" width={100} height={60} />
            <p className="md:text-[22px]">Dr Ahmed Nabil</p>
          </div>
        </Link>

        <div className="space-x-6 flex items-center text-[12px] mt-2 md:mt-0 md:text-xl">
          <div className="hover:hover:text-black duration-500">
            <Link href="/">Home</Link>
          </div>

          <div className="hover:hover:text-black  duration-500 cursor-pointer ">
            <Link href="/appointment" smooth={true} offset={0} duration={500}>
              Book Appointment
            </Link>
          </div>

          <div className="hover:hover:text-black  duration-500 cursor-pointer ">
            <Scroll to="service" smooth={true} offset={0} duration={500}>
              Service
            </Scroll>
          </div>

          <div className="hover:hover:text-black  duration-500 cursor-pointer ">
            <Scroll to="About-Us" smooth={true} offset={0} duration={500}>
              About Us
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

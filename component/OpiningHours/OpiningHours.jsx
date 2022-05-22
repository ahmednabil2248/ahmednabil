import React from "react";
import Image from "next/image";
import Eye from "../../public/asset/open Hours/Eye.PNG";
import { BiMobile } from "react-icons/bi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const OpiningHours = () => {
  return (
    <div className=" mx-auto pb-5 md:h-[700px] md:my-14 md:relative overflow-hidden flex flex-col-reverse items-center justify-items-start mb-5">
      <div className="w-[320px] md:w-[400px] h-[400px] bg-[#5B7DB1] md:absolute top-[43%] left-[43%] z-10 rounded-[15px] space-y-5 pt-0 md:pt-[5rem] flex flex-col items-center justify-center">
        <h1 className="text-[30px] font-extrabold mb-5 text-black">
          OPENING HOURS
        </h1>
        <h1 className="text-[17px] font-extrabold text-black">
          Saturday to Thursday from 6 to 9 pm
        </h1>

        <div className="flex flex-col space-y-5 text-black">
          <div className="text-[20px] font-extrabold flex justify-center items-center">
            <span className="text-blue-300 text-[40px] mr-2">
              <BiMobile />
            </span>

            <span>01125495594</span>
          </div>

          <div className="text-[20px] font-extrabold flex justify-center items-center">
            <span className="text-green-400 text-[40px] mr-2">
              <AiOutlineWhatsApp />
            </span>

            <span>01060461112</span>
          </div>
        </div>
      </div>

      <div className="w-[320px]  md:w-[400px] h-[400px] md:absolute  top-[3%] left-[25%] z-20 rounded-[15px]">
        <Image
          src={Eye}
          alt="OpiningHours"
          width={400}
          height={400}
          className="object-cover rounded-[15px]"
        />
      </div>
    </div>
  );
};

export default OpiningHours;

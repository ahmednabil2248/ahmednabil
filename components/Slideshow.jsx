import React from "react";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
  const images = [
    "/asset/Banner/Eye1.jpg",
    "/asset/Banner/eye2.jpg",
    "/asset/Banner/eye3.jpg",
    "/asset/Banner/eye4.PNG",
    "/asset/Banner/eye5.PNG",
    "/asset/Banner/eye6.PNG",
  ];

  const zoomInProperties = {
    indicators: false,
    autoplay: true,
    scale: 1.2,
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div
        style={{ width: "38px", marginRight: "-38px", cursor: "pointer" }}
        className=" bg-[#5B7DB1]  rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div
        style={{ width: "38px", marginLeft: "-38px", cursor: "pointer" }}
        className=" bg-[#5B7DB1]  rounded-full p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  return (
    <>
      <Slide {...zoomInProperties}>
        {images.map((each, index) => (
          <div key={index} className="flex justify-center w-full h-full">
            <Image src={each} width={4000} height={1600} alt="i" />
          </div>
        ))}
      </Slide>
    </>
  );
};

export default Slideshow;

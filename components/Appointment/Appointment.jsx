import React, { useRef } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

import bg from "../../public/asset/doctor.png";

import Image from "next/image";
import Slideshow from "../Slideshow";
// service_04ed8yk
const Appointment = () => {
  const router = useRouter();
  const form = useRef(null);
  const name = useRef(null);
  const age = useRef(null);
  const phone = useRef(null);
  const time = useRef(null);
  const date = useRef(null);
  console.log(name.current?.value);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      name.current?.value &&
      phone.current?.value &&
      age.current?.value &&
      time.current?.value &&
      name.current?.value &&
      date.current.value
    ) {
      emailjs
        .sendForm(
          "service_04ed8yk",
          "template_sja2xil",
          form.current,
          "UVcGZPO7CtlTqhmjL"
        )
        .then(
          (result) => {
            console.log(result.text);
            router.push("contact");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("please Fill the Inputs");
    }
  };
  return (
    <>
      <Slideshow />
      <div className="w-full max-w-3xl mx-auto shadow-2xl my-5">
        <form
          className="shadow-md rounded-xl px-10 pt-6 pb-8 mb-4 bg-[#5B7DB1] "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex">
            <div className="hidden md:flex">
              <Image src={bg} alt="bg" width={300} height={600} />
            </div>
            <div className="w-full">
              <label htmlFor="Name" className="text-black text-[20px] ">
                Name
              </label>
              <div className="mb-6 flex items-center justify-center px-5">
                <input
                  className="shadow-md appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="Name"
                  placeholder="Your name"
                  autoComplete="off"
                  name="user_name"
                  ref={name}
                />
              </div>
              <div className="w-full">
                <label htmlFor="Phone" className="text-black text-[20px] mb-5">
                  Phone
                </label>
                <div className="mb-6 flex items-center justify-center px-5">
                  <input
                    className="shadow-md appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    id="Phone"
                    placeholder="Phone"
                    autoComplete="off"
                    name="user_phone"
                    ref={phone}
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="Age" className="text-black text-[20px]">
                  Age
                </label>
                <div className="mb-6 flex items-center justify-center px-5">
                  <input
                    className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Age"
                    type="text"
                    placeholder="Age"
                    autoComplete="off"
                    name="user_age"
                    ref={age}
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="date" className="text-black text-[20px] ">
                  Date
                </label>

                <div className="mb-6 flex items-center justify-center px-5 ">
                  <input
                    className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="date"
                    id="date"
                    name="user_date"
                    ref={date}
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="time" className="text-black text-[20px]">
                  Time
                </label>
                <div className="mb-6 flex items-center justify-center px-5 ">
                  <input
                    className="shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="time"
                    id="time"
                    name="user_time"
                    ref={time}
                  />
                </div>
              </div>

              <div className="mb-6 flex items-center justify-center px-5">
                <textarea
                  className="shadow-md appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Message.."
                  name="message"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <input
              className=" cursor-pointer bg-gradient-to-r from-red-500  to-red-800 text-black font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Book Appointment"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Appointment;

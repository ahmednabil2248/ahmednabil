import React, { useEffect } from "react";
import Head from "next/head";

import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  const Path = router.pathname;

  useEffect(() => {
    if (Path === "/contact") {
      const TimeOut = setTimeout(() => {
        router.push("/");
      }, 3000);
      return () => clearTimeout(TimeOut);
    }
  }, [Path, router]);

  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="h-screen w-full flex justify-center items-center px-5 md:p-0">
        <h1 className="font-extrabold text-[40px]">
          Thank You For Trusting Us And We Will Contact You
        </h1>
      </div>
    </>
  );
};

export default Contact;

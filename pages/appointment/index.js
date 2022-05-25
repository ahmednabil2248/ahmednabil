import React from "react";
import Head from "next/head";

import Appointment from "../../components/Appointment/Appointment";

const appointment = () => {
  return (
    <div>
      <Head>
        <title>Appointment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Appointment />
    </div>
  );
};

export default appointment;

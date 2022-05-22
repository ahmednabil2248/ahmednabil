import Image from "next/image";

const ServiceDetails = ({ dec, image }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center px-4 md:max-w-3xl mx-auto my-5 text-[18px] font-semibold md:flex md:justify-between py-5">
        <Image
          src={image}
          alt="ll"
          width={300}
          height={300}
          className="rounded"
        />
        <p className="max-w-[300px] md:text-left leading-7 font-semibold  pt-6">
          {dec}
        </p>
      </div>
    </>
  );
};

export default ServiceDetails;

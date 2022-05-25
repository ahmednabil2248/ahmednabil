import Image from "next/image";
import { useRouter } from "next/router";

const ServiceDetails = ({ dec, image, ardec }) => {
  const router = useRouter();

  let lang = router.locale === "ar";

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between  items-center px-4 md:max-w-5xl mx-auto my-5 text-[18px] font-semibold md:flex md:justify-between py-5">
        <Image
          src={image}
          alt="logo"
          width={300}
          height={300}
          className="rounded"
        />
        <p className="max-w-[500px] md:text-left leading-9 font-semibold  pl-5 pt-6">
          {lang ? ardec : dec}
        </p>
      </div>
    </>
  );
};

export default ServiceDetails;

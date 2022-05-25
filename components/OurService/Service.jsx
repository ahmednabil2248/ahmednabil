import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Service = ({ title, image, title2 }) => {
  const router = useRouter();

  let lang = router.locale === "ar";
  return (
    <div className="border border-gray-300 p-5" id="service">
      <Image
        src={image}
        alt="Service"
        width={250}
        height={200}
        className="hover:rotate-12 duration-300 ease-in"
      />

      <h1 className="mb-5 text-[18px] font-bold">{title}</h1>

      <Link href={`/Ourservice/${title2}`} passHref>
        <h1 className="cursor-pointer bg-[#5B7DB1] px-8 py-1 rounded font-semibold text-white hover:text-black hover:bg-none  duration-700 border border-black w-[60%] mx-auto  ease-in">
          {lang ? "اقرأ مزيد" : "More Info"}
        </h1>
      </Link>
    </div>
  );
};

export default Service;

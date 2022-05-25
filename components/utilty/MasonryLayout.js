import React from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

const brakepointobj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};
const MasonryLayout = ({ imagee }) => {
  return (
    <div>
      <Masonry
        className="flex animate-slide-fwd"
        breakpointCols={brakepointobj}
      >
        {imagee.map((img) => (
          <>
            <Image
              src={img}
              alt="facebook"
              width={500}
              height={500}
              className="hover:scale-90 duration-500"
            />
          </>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryLayout;

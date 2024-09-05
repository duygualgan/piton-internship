import React from "react";
import Image from "next/image";
import midImage from "../public/mid-image.png";

const MidImage = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div className="lg:w-[1528px] lg:h-[639px] sm:w-full sm:h-[60px]  md:h-[300px]">
          <Image src={midImage} alt="Product Image" />
        </div>
      </section>
    </>
  );
};

export default MidImage;

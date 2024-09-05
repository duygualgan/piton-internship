import React from "react";
import Image from "next/image";
import midImage from "../public/mid-image.png";

const MidImage = () => {
  return (
    <>
      <section className="flex justify-center ">
        <div className="w-[1528px] h-[639px]">
          <Image src={midImage} alt="Product Image" />
        </div>
      </section>
    </>
  );
};

export default MidImage;

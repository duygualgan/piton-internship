import React from "react";
import Image from "next/image";
import hand1 from "../public/hands/image 1.png";
import hand2 from "../public/hands/image 2.png";
import hand3 from "../public/hands/image 3.png";
import hand4 from "../public/hands/image 4.png";
import hand5 from "../public/hands/image 5.png";
import hand6 from "../public/hands/image 6.png";

const colors = {
  secondary: "#FEBC0A",
};

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-primary">
      <svg className="absolute top-0 left-0" width="100%" height="100%">
        <ellipse
          cx="20%"
          cy="25%"
          rx="258"
          ry="164"
          fill={colors.secondary}
          className="transform rotate-[-40.52deg] origin-[25%_25%]"
        />
        <ellipse
          cx="10%"
          cy="45%"
          rx="258"
          ry="164"
          fill={colors.secondary}
          className="transform rotate-[-40.52deg] origin-[25%_25%]"
        />
        <rect
          x="60%"
          y="70%"
          width="495"
          height="495"
          rx="312"
          ry="312"
          fill={colors.secondary}
          transform="translate(-438, -438) rotate(16.41 438 438)"
        />

        <rect
          x="75%"
          y="12%"
          width="876"
          height="876"
          rx="312"
          ry="312"
          fill={colors.secondary}
          transform="translate(-438, -438) rotate(16.41 438 438)"
        />
      </svg>

      <div className="relative w-full flex flex-col items-center justify-end px-4 mt-40">
        <div className="absolute flex flex-col items-center justify-center max-w-[1121px] max-h-[220px] w-full">
          <h1 className="text-black text-8xl font-bold text-center">
            Let’s create something great together.
          </h1>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="flex flex-row space-x-4 w-[1468px] h-[388px]">
          <Image src={hand1} alt="Hand 1" width={244} height={388} />
          <Image src={hand2} alt="Hand 2" width={244} height={388} />
          <Image src={hand3} alt="Hand 3" width={244} height={388} />
          <Image src={hand4} alt="Hand 4" width={244} height={388} />
          <Image src={hand5} alt="Hand 5" width={244} height={388} />
          <Image src={hand6} alt="Hand 6" width={244} height={388} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

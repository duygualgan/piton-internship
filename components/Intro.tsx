import React from "react";

const Intro = () => {
  return (
    <div className="bg-white lg:py-[130px] md:py-12 sm:py-[50px] lg:px-[106px] md:px-4 sm:px-[35px] text-center">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl text-black font-manrope font-bold text-left">
          Who we are
        </h1>
        <p className="mt-6 text-black1 font-manrope font-normal text-xl lg:text-lg md:text-base sm:text-sm text-left">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
    </div>
  );
};

export default Intro;

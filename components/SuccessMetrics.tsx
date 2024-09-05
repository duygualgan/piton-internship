import React from "react";

function SuccessMetrics() {
  const stats = [
    { number: "350+", label: "Clients Worldwide" },
    { number: "20+", label: "Team Members" },
    { number: "100+", label: "Projects Completed" },
    { number: "85M+", label: "Revenue Generated" },
  ];

  return (
    <>
      <div className="w-full bg-black py-16 mt-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-primary text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
                {stat.number}
              </h3>
              <p className="mt-2 text-3xl lg:text-2xl md:text-xl sm:text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SuccessMetrics;

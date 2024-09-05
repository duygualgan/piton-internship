import React from "react";

interface HeroCardProps {
  name: string;
  title: string;
  image: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ name, title, image }) => {
  return (
    <div className="bg-white shadow-xl w-[400px] h-[560px]">
      <img
        src={image}
        alt={name}
        className="w-[393px] h-[376px] object-cover p-5"
      />
      <div className="p-4 text-left ">
        <h3 className="font-manrope text-3xl font-bold text-gray-800">
          {name}
        </h3>
        <p className="font-manrope text-2xl text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const HeroesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-14 mt-16">
        <h2 className="text-3xl font-bold font-manrope text-gray-900">
          Meet the heroes behind the magic
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-20 gap-8 max-w-[1439px] mx-auto">
        <HeroCard
          name="Esther Howard"
          title="Founder"
          image="/avatar/founder.png"
        />
        <HeroCard
          name="Cody Fisher"
          title="Developer"
          image="/avatar/developer.png"
        />
        <HeroCard
          name="Brooklyn Simmons"
          title="Designer"
          image="/avatar/designer.png"
        />
      </div>
    </section>
  );
};

export default HeroesSection;

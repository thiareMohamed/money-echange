import ServiceCard from "@/components/ServiceCard";
import React from "react";

const Services = () => {
  return (
    <div className="flex dgrid-cols-5 items-center -mt-[9rem] gap-8 mx-[10%]">
      <div className="w-full grid bg-primary text-white rounded-lg p-8 gap-8 col-span-2">
        <h2 className="font-bold text-2xl">
          Pourquoi choisir Money Echange pour vos échanges?{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Asperiores
          dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel
          necessitatibus optio ad corporis.
        </p>
        <button className="bg-white/10 py-2 p-6 rounded-full mx-auto">
          {"Voir Plus >"}
        </button>
      </div>
      <ServiceCard />
      <ServiceCard />
      <ServiceCard />
    </div>
  );
};

export default Services;

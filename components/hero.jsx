import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

function Hero() {
  return (
    <div className="flex min-h-screene flex-col justify-center py-[20%] px-[8%] bg-violet-700 bg-[url(/bg-hero.png)] bg-bottom">
      <div>
        <h1 className="text-white font-semibold text-4xl mb-4">
          Welcome to Money Echange
        </h1>
        <p className="text-gray-300 text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. sed do eismod{" "}
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. sed do eismod
        </p>
      </div>
      <button className="flex items-center justify-center w-fit mt-[7rem]">
        <span className="bg-primary p-4 text-white font-bold rounded-full flex items-center justify-center z-30">
          <BiRightArrowAlt size={20} />
        </span>
        <span className="bg-white -ml-8 z-20 text-primary py-2 pl-10 px-8 rounded-full">
          Commencer
        </span>
      </button>
    </div>
  );
}

export default Hero;

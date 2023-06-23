import React from "react";
import { BiMap } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="flex flex-col gap-6 w-fit mx-auto">
      <h2 className="text-center text-xl font-semibold">Contact</h2>
      <p className="text-center w-[700px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Asperiores dolores
        sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
        optio ad corporis.
      </p>
      <div className="w-fit flex shadow-md rounded-xl bg-red-300 overflow-hidden">
        <div className="bg-primary flex flex-col gap-6 px-6 py-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <form className="flex flex-col p-6 bg-white gap-6">
          <div className="flex gap-6">
            <input
              className="p-2 border border-gray-400 w-full"
              type="text"
              placeholder="Prénom et Nom"
            />
            <input
              className="p-2 border border-gray-400 w-full"
              type="text"
              placeholder="Prénom et Nom"
            />
          </div>

          <input
            className="p-2 border border-gray-400 w-full"
            type="text"
            placeholder="Sujet"
          />
          <textarea
            className="p-2 border border-gray-400 w-full h-full"
            placeholder="Message"
          ></textarea>
          <button className="bg-primary py-3 px-8 rounded-full text-white w-fit mx-auto">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

const Card = () => {
  return (
    <div className="flex items-center p-4 px-6 gap-4 bg-white/10 rounded-lg">
      <div className="p-3 bg-white text-primary rounded-full h-fit">
        <BiMap size={20} />
      </div>
      <div className="text-white">
        <h3>Adresse</h3>
        <p>Parcelles Assainies/DAKAR/Senegal</p>
      </div>
    </div>
  );
};

import React from "react";
import { FaExchangeAlt } from "react-icons/fa";

const ServiceCard = () => {
  return (
    <div className="grid items-center justify-center gap-8 bg-white py-8 px-6 rounded-lg h-fit drop-shadow-md [0px_2px_15px_0px_rgba(0,0,0,0.10)]">
      <FaExchangeAlt className="w-fit mx-auto text-primary" size={25} />
      <h3 className="font-bold text-dark text-center text-xl">
        Transfert crypto vers mobile money
      </h3>
      <p>
        Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris
        nisi ut aliquip
      </p>
    </div>
  );
};

export default ServiceCard;

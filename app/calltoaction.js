import React from "react";

const Calltoaction = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-16 bg-[url('/calltoactionbg.png')] bg-center">
      <h2 className="text-5xl text-white w-[50%] text-center">
        Prêt à découvrir le potentiel des crypto ?
      </h2>
      <p className="text-center text-white">
        Money Echage vous accompagne dans vos investissements en cryptoactifs
      </p>
      <div className="flex gap-2 mt-4">
        <button className="py-3 px-6 bg-primary border-2 border-primary text-white rounded-full">
          Créer un compte
        </button>
        <button className="py-3 px-6 border-2 border-primary text-white rounded-full">
          Pourquoi Kronance
        </button>
      </div>
    </div>
  );
};

export default Calltoaction;

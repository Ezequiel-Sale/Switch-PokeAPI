import React from "react";

const Labels = () => {
  return (
    <div className="absolute top-0 m-2">
    <div className="text-center text-white">
      <p className="">Pulsa <span className="text-red-600">A</span> para ver la información del pokemón.</p>
      <p>Pulsa <span className="text-red-600">B</span> para volver.</p>
    </div>
    <div className="text-white">
        <h1 className=" text-center">Utiliza las flechas ( <span className="text-xl">◄ </span> , <span className="text-xl">►</span>, <span>▲</span>, <span>▼</span> ) para cambiar de pokemón en la pantalla principal.</h1>
    </div>
    </div>
  );
};

export default Labels;

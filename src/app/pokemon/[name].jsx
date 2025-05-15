"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const PokeDetail = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [img, setImg] = useState(null);
  console.log(pokemon);

  useEffect(() => {
    const fetchPokemon = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setPokemon(data);
    };
    fetchPokemon();
  }, [name]);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await res.json();
      setImg(data.sprites);
    };
    fetchImage();
  }, [name]);

  if (!pokemon) return <p>Cargando...</p>;

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center absolute left-0 top-2">
        <span className="text-xl text-white">Base</span>
        <Image
          src={img.front_default}
          alt={pokemon.name}
          width={150}
          height={150}
        />
        <span className="text-xl text-white">Shiny</span>
        <Image
          src={img.front_shiny}
          alt={pokemon.name}
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col absolute right-10 top-2">
        <span className="text-xl text-white">Name</span>
        <h1 className="text-teal-500">{pokemon.name}</h1>
        <span className="text-xl text-white">Weight</span>
        <h2 className="text-teal-500">{pokemon.weight} kg</h2>
        <span className="text-xl text-white">Height</span>
        <h2 className="text-teal-500">{pokemon.height} cm</h2>
      </div>
    </div>
  );
};

export default PokeDetail;

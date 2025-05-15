"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
const PokeDetail = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [img, setImg] = useState(null);
  console.log(pokemon);

  const typeColors = {
    grass: "bg-green-500",
    poison: "bg-purple-600",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400 text-black",
    bug: "bg-lime-600",
    flying: "bg-sky-300 text-black",
    normal: "bg-gray-400",
    ground: "bg-yellow-700",
    fairy: "bg-pink-400",
    fighting: "bg-orange-700",
    psychic: "bg-pink-600",
    rock: "bg-yellow-800",
    ghost: "bg-indigo-800",
    ice: "bg-cyan-200 text-black",
    dragon: "bg-indigo-600",
    dark: "bg-gray-800",
    steel: "bg-gray-500",
  };

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
        <span className="text-xl -mb-8 font-semibold text-white ">Base</span>
        <Image
          src={img.front_default}
          alt={pokemon.name}
          width={150}
          height={150}
          className="mt-5"
        />
        <span className="text-xl -mb-8 font-semibold text-white">Shiny</span>
        <Image
          src={img.front_shiny}
          alt={pokemon.name}
          width={150}
          height={150}
          className="mt-5"
        />
      </div>
      <div className="flex flex-col absolute right-1 top-2">
        <div className="flex flex-col">
          <span className="text-xl text-white">Name</span>
          <h1 className="text-teal-500">{pokemon.name}</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-xl">Types</h1>
          <div className="flex gap-1">
            {pokemon.types.map((typeObj, idx) => (
              <span
                key={typeObj.type.name}
                className={`p-0.5 rounded-md text-white ${
                  typeColors[typeObj.type.name] || "bg-gray-300"
                }`}
              >
                {typeObj.type.name}
              </span>
            ))}
          </div>
        </div>

        <span className="text-xl text-white">Weight</span>
        <h2 className="text-teal-500">{pokemon.weight} kg</h2>
        <span className="text-xl text-white">Height</span>
        <h2 className="text-teal-500">{pokemon.height} cm</h2>
        <div className="flex flex-col mt-2">
          <h1 className="text-white text-2xl">Stats</h1>
          <div className="flex flex-col">
            <span className=" text-white">
              HP{" "}
              <span className="text-teal-500">
                {pokemon.stats[0].base_stat}
              </span>
            </span>

            <span className=" text-white">
              Attack{" "}
              <span className="text-teal-500">
                {pokemon.stats[1].base_stat}
              </span>
            </span>

            <span className=" text-white">
              Defense{" "}
              <span className="text-teal-500">
                {pokemon.stats[2].base_stat}
              </span>
            </span>

            <span className=" text-white">
              Special Attack{" "}
              <span className="text-teal-500">
                {pokemon.stats[3].base_stat}
              </span>
            </span>

            <span className=" text-white">
              Special Defense{" "}
              <span className="text-teal-500">
                {pokemon.stats[4].base_stat}
              </span>
            </span>

            <span className=" text-white">
              Speed{" "}
              <span className="text-teal-500">
                {pokemon.stats[5].base_stat}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeDetail;

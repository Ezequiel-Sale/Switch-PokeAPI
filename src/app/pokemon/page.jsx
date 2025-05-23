"use client";
import Link from "next/link";
import  { useEffect, useRef, useState } from "react";

const PokeApi = ({ onSelect, setPokemonList, currentIndex }) => {
  const api = "https://pokeapi.co/api/v2/pokemon";

  const [allpokemons, setAllPokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const selectedRef = useRef(null);
useEffect(() => {
    if (selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [currentIndex]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) throw new Error("Failed to fetch Pokémon list");
        const data = await response.json();
        setAllPokemons(data.results);
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const details = await Promise.all(
          allpokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            if (!response.ok)
              throw new Error(`Failed to fetch details for ${pokemon.name}`);
            return await response.json();
          })
        );
        setPokemonDetails(details);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    if (allpokemons.length > 0) {
      fetchPokemonDetails();
    }
  }, [allpokemons]);

  if (!allpokemons) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <>
      <h1 className="text-center text-white text-2xl font-mono">PokeApi</h1>
      <div className="flex justify-center items-center flex-wrap">
       {allpokemons.map((pokemon, idx) => (
          <button
            key={pokemon.name}
            ref={idx === currentIndex ? selectedRef : null}
            onClick={() => onSelect(pokemon.name)}
            className={`w-[90px] h-[120px] bg-cyan-900 rounded-md flex flex-col justify-center items-center m-1 text-white ${currentIndex === allpokemons.indexOf(pokemon) ? "bg-red-950" : ""}`}
          >
            <li className="list-none">{pokemon.name}</li>
            {pokemonDetails.find((detail) => detail.name === pokemon.name) && (
              <img
                src={
                  pokemonDetails.find((detail) => detail.name === pokemon.name)
                    .sprites.front_default
                }
                alt={pokemon.name}
                className="w-20 h-20"
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default PokeApi;

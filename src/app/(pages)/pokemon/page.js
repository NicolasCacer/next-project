'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';  // Import the Image component

export default function Page() {
  const [pokemonName, setPokemonName] = useState('pikachu'); // Default to 'pikachu'
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch the Pokémon data based on the pokemonName
  const fetchPokemon = async () => {
    if (!pokemonName) return;

    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!res.ok) {
        throw new Error('Pokémon not found');
      }
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      setPokemon(null); // Reset if there is an error
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setPokemonName(e.target.value.toLowerCase()); // Convert to lowercase to handle case-insensitive search
  };

  // Handle the search button click
  const handleSearchClick = () => {
    fetchPokemon(); // Trigger the fetch when the search button is clicked
  };

  return (
    <div className="container text-center">
      <h1 className="text-2xl font-bold mb-4">Search for a Pokémon</h1>
      <input
        type="text"
        placeholder="Enter Pokémon name or ID"
        value={pokemonName}
        onChange={handleInputChange}
        className="border p-2 rounded-l-lg mb-4 text-black h-[40px]"
      />
      <button
        onClick={handleSearchClick}
        className="bg-blue-500 text-white p-2 rounded-r-lg mb-4 h-[40px]"
      >
        Search
      </button>
      {loading ? (
        <p>Cargando...</p>
      ) : pokemon ? (
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{pokemon.name}</h1>
          <Image
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={200}  // Set a fixed width for the image (or choose a suitable value)
            height={200} // Set a fixed height for the image (or choose a suitable value)
            className='h-[200px] w-[200px]'
            priority
          />
          <p className="mt-2">ID: {pokemon.id}</p>
          <p>Height: {pokemon.height} decimeters</p>
          <p>Weight: {pokemon.weight} hectograms</p>
        </div>
      ) : (
        <p>No Pokémon found. Please try again.</p>
      )}
      <button className="bg-red-500 shadow-xl p-2 rounded-full hover:bg-red-800" onClick={()=>router.push('/')}>Go to menu</button>
    </div>
  );
}

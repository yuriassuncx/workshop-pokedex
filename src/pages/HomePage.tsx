import { useState } from "react";

import { fetchPokemons } from "../hooks/fetchPokemons";

import { Loading } from "../components/Loading";
import { Card } from "../components/Card";

import { MagnifyingGlass, Hash, PokerChip } from "phosphor-react";

export function HomePage() {
  const { pokemons, loading } = fetchPokemons();

  const [searchInput, setSearchInput] = useState("");

  if (loading || !pokemons) return <Loading />;

  return (
    <div className="flex flex-col mb-12">
      <header className="flex flex-col items-start w-full h-1/4 bg-red-500 px-6 py-4 gap-3 drop-shadow-lg">
        <div className="flex items-center gap-4 text-white font-bold py-4">
          <PokerChip
            size={44}
          />

          <h1 className="text-3xl">Pokédex</h1>
        </div>

        <div className="flex w-full gap-12 items-center justify-between">
          <div className="flex flex-1 border bg-white rounded-full items-center">
            <span className="flex pl-4">
              <MagnifyingGlass
                size={25}
                weight="bold"
                className="text-red-700"
              />
            </span>

            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search"
              className="w-full py-3 px-6 rounded-full text-red-700 placeholder:text-gray-600 focus:outline-none"
            />
          </div>

          <Hash size={46} weight="bold" className="bg-white text-red-600 p-3 rounded-full" />
        </div>
      </header>

      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 pt-12 gap-3 mx-auto">
        {pokemons?.filter((filteredItem) => filteredItem.name.toLowerCase().includes(searchInput.toLowerCase()))?.map((item) => (
          <Card
            key={item.name}
            pokemonName={item.name}
            pokemonUrl={item.url}
          />
        ))}
      </main>
    </div>
  )
}

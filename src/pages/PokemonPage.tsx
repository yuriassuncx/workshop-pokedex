import { useNavigate, useParams } from 'react-router-dom';

import { fetchSinglePokemon } from '../hooks/fetchSinglePokemon';

import { Loading } from '../components/Loading';
import { Stat } from '../components/Stat';

import { ArrowLeft, Barbell, Ruler } from 'phosphor-react';

import clsx from 'clsx';

export function PokemonPage() {
  const { slug } = useParams<{ slug: string }>();

  const navigate = useNavigate();

  const { pokemon, loading } = fetchSinglePokemon(slug!);

  if (!pokemon || loading) return <Loading />

  return (
    <div
      className={clsx('flex flex-col justify-between w-full h-screen gap-28', {
        'bg-emerald-400 text-emerald-400': pokemon.types[0].type.name === 'grass',
        'bg-purple-400 text-purple-400': pokemon.types[0].type.name === 'poison',
        'bg-yellow-400 text-yellow-400': pokemon.types[0].type.name === 'bug',
        'bg-orange-400 text-orange-400': pokemon.types[0].type.name === 'fire',
        'bg-blue-400 text-blue-400': pokemon.types[0].type.name === 'water',
        'bg-sky-400 text-sky-400': pokemon.types[0].type.name === 'ice',
        'bg-neutral-300 text-neutral-300': pokemon.types[0].type.name === 'normal',
        'bg-yellow-300 text-yellow-300': pokemon.types[0].type.name === 'electric',
        'bg-lime-600 text-lime-600': pokemon.types[0].type.name === 'ground',
        'bg-fuchsia-300 text-fuchsia-300': pokemon.types[0].type.name === 'fairy',
        'bg-[#c03028] text-[#c03028]': pokemon.types[0].type.name === 'fighting',
        'bg-yellow-500 text-yellow-500': pokemon.types[0].type.name === 'psychic',
        'bg-purple-900 text-purple-900': pokemon.types[0].type.name === 'ghost',
        'bg-stone-500 text-stone-500': pokemon.types[0].type.name === 'rock',
        'bg-[#705848] text-[#705848]': pokemon.types[0].type.name === 'dark',
        'bg-[#7038f8] text-[#7038f8]': pokemon.types[0].type.name === 'dragon',
        'bg-sky-800 text-sky-800': pokemon.types[0].type.name === 'flying',
        'bg-stone-400 text-stone-600': pokemon.types[0].type.name === 'steel',
      })}
    >
      <header className="flex items-center justify-between font-bold text-white p-6">
        <div className="flex items-center gap-3">
          <ArrowLeft
            size={24}
            weight="bold"
            onClick={() => navigate('/')}
            className="cursor-pointer animate-bounce duration-150" 
          />

          <h1 className="capitalize text-2xl">{pokemon.name}</h1>
        </div>

        <p className="text-lg">#{pokemon.order}</p>
      </header>

      <section className="flex flex-col w-full items-center gap-12 bg-white rounded-t-2xl shadow-2xl drop-shadow-md">
        <img
          src={pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']}
          alt={`Imagem do pokemon: ${pokemon.name}`}
          className="w-52 -mt-24"
        />

        <div className="flex items-center justify-center gap-6">
          {pokemon.types.map((item) => (
            <span
              key={item.type.name}
              className={clsx('rounded-full items-center justify-center px-8 py-1 text-white capitalize font-bold cursor-pointer hover:scale-105 duration-150 transition-transform', {
                'bg-emerald-500': item.type.name === 'grass',
                'bg-purple-600': item.type.name === 'poison',
                'bg-yellow-400': item.type.name === 'bug',
                'bg-orange-400': item.type.name === 'fire',
                'bg-blue-400': item.type.name === 'water',
                'bg-blue-600': item.type.name === 'ice',
                'bg-neutral-300': item.type.name === 'normal',
                'bg-yellow-300': item.type.name === 'electric',
                'bg-lime-600': item.type.name === 'ground',
                'bg-fuchsia-300': item.type.name === 'fairy',
                'bg-[#c03028]': item.type.name === 'fighting',
                'bg-yellow-500': item.type.name === 'psychic',
                'bg-purple-900': item.type.name === 'ghost',
                'bg-stone-500': item.type.name === 'rock',
                'bg-stone-400': item.type.name === 'steel',
                'bg-sky-800': item.type.name === 'flying',
                'bg-[#705848]': item.type.name === 'dark',
                'bg-[#7038f8]': item.type.name === 'dragon',     
              })}
            >
              {item.type.name}
            </span>
          ))}          
        </div>

        <h1 className="pt-3 font-bold text-2xl">About</h1>

        <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 gap-1 divide-gray-400 text-black">
          <div className="flex flex-col justify-center items-center px-8 py-1 gap-2">
            <div className="flex items-center gap-3">
              <Barbell size={24} />
              <span>{pokemon.weight/10} kg</span>
            </div>

            <span className="text-gray-500">Weight</span>
          </div>

          <div className="flex flex-col justify-center items-center px-8 py-1 gap-2">
            <div className="flex items-center gap-3">
              <Ruler size={24} />
              <span>{pokemon.height/10} m</span>
            </div>

            <span className="text-gray-500">Height</span>
          </div>

          <div className="flex flex-col justify-center items-center px-8 pt-4 md:pt-0 gap-2">
            <div className="flex flex-col items-center w-full h-[120px] overflow-y-scroll scrollbar-thin scrollbar-track-zinc-400 scrollbar-thumb-zinc-900">
              {pokemon.moves.map((item) => (
                <span key={item.move.name} className="uppercase">{item.move.name}</span>
              ))}
            </div>

            <span className="text-gray-500">Moves</span>
          </div>
        </div>

        <footer className="flex flex-col w-[75%] gap-12 pb-12 font-bold">
          <h1 className="text-2xl text-center">Base Stats</h1>

          {pokemon.stats.map((item, index) => (
            <Stat
              key={index}
              stat_name={item.stat.name}
              base_stat={item.base_stat}
              pokemonType={pokemon.types[0].type.name}
            />
          ))}
        </footer>
      </section>
    </div>
  )
}

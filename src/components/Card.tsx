import { Link } from 'react-router-dom';

interface CardProps {
  pokemonName: string;
  pokemonUrl: string;
}

export function Card({ pokemonName, pokemonUrl }: CardProps) {
  const pokemonPosition = pokemonUrl?.replace(/\D/g, '').slice(1);

  return (
    <Link to={`/pokemon/${pokemonPosition}`} className="flex flex-col justify-between w-[170px] h-44 gap-2 bg-white rounded-md shadow-2xl drop-shadow-md cursor-pointer hover:scale-105 duration-150 transition">
      <span className="text-end p-2">#{pokemonPosition}</span>

      <section className="flex flex-col justify-between pb-2 items-center bg-slate-200 w-full h-[45%] rounded-md">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonPosition}.png`}
          alt={`Imagem do pokemon: ${pokemonName}`}
          className="w-28 h-28 -mt-16"
        />
        
        <span className="capitalize">{pokemonName}</span>
      </section>
    </Link>
  )
}

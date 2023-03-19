import clsx from 'clsx';

interface ProgressBarProps {
  progress: number;
  pokemonType: string;
}

export function ProgressBar({ progress, pokemonType }: ProgressBarProps) {
  return (
    <div className="h-3 rounded-xl bg-slate-200 w-full relative">
      <div 
        role="progressbar"
        aria-label="Progresso do status do Pokémon"
        aria-valuenow={progress}
        className={clsx('h-3 rounded-xl transition-all duration-150', {
          'bg-emerald-400': pokemonType === 'grass',
          'bg-purple-400': pokemonType === 'poison',
          'bg-yellow-400': pokemonType === 'bug',
          'bg-orange-400': pokemonType === 'fire',
          'bg-blue-400': pokemonType === 'water',
          'bg-sky-400': pokemonType === 'ice',
          'bg-neutral-300': pokemonType === 'normal',
          'bg-yellow-300': pokemonType === 'electric',
          'bg-lime-600': pokemonType === 'ground',
          'bg-fuchsia-300': pokemonType === 'fairy',
          'bg-[#c03028]': pokemonType === 'fighting',
          'bg-yellow-500': pokemonType === 'psychic',
          'bg-purple-900': pokemonType === 'ghost',
          'bg-stone-500': pokemonType === 'rock',
          'bg-[#705848]': pokemonType === 'dark',
          'bg-[#7038f8]': pokemonType === 'dragon',
          'bg-sky-800': pokemonType === 'flying',
          'bg-stone-400': pokemonType === 'steel',
        })}
        style={{
          width: `${progress > 100 ? 100 : progress}%`
        }}
      />
    </div>
  )
}

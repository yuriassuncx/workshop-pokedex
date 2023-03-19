import { ProgressBar } from "./ProgressBar";

interface StatProps {
  stat_name: string;
  pokemonType: string;  
  base_stat: number;
}

export function Stat({ stat_name, base_stat, pokemonType }: StatProps) {
  return (
    <div className="inline-block items-center">
      <div className="flex items-center justify-between uppercase">
        <p>{stat_name}</p>
        <p>{base_stat}</p>
      </div>
  
      <ProgressBar
        progress={base_stat}
        pokemonType={pokemonType}
      />
    </div>
  )
}

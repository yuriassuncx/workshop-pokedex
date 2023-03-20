import { useEffect, useState } from "react";

import axios from "axios";

interface IPokemonSprites {
  "versions": {
    "generation-v": {
      "black-white": {
        animated: {
          front_default: string;
        }
      }
    }
  }
}

interface Pokemon {
  name: string;
  weight: number;
  height: number;
  order: number;
  moves: [
    item: {
      move: {
        name: string;
      },
    },
  ];
  sprites: IPokemonSprites;
  types: [
    item: {
      type: {
        name: string;
      },
    },
  ],
  stats: [
    item: {
      stat: {
        name: string;
      },
      base_stat: number;
    }
  ]
}

export function fetchSinglePokemon(slug: string) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        await axios
          .get(`https://pokeapi.co/api/v2/pokemon/${slug}`)
          .then((response) => setPokemon(response.data))
          .finally(() => setLoading(false))
      } catch(error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return {
    pokemon,
    loading
  }
}

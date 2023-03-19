import { useEffect, useState } from "react";

import axios from "axios";

interface CardProps {
  name: string;
  url: string;
}

export function fetchPokemons() {
  const [pokemons, setPokemons] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        await axios
          .get('https://pokeapi.co/api/v2/pokemon?limit=99')
          .then((response) => setPokemons(response.data.results))
          .finally(() => setLoading(false));
      } catch(error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return {
    pokemons,
    loading
  };
}

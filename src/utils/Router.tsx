import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { PokemonPage } from '../pages/PokemonPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/:slug" element={<PokemonPage />} />
    </Routes>
  )
}

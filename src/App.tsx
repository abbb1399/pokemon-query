import { Route, Routes, Navigate } from "react-router-dom"

import Layout from "./components/layout/Layout"
import PokemonPage from "./pages/Pokemon"
import MyPokemonsPage from "./pages/MyPokemons"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<PokemonPage />} />
        <Route path="/my-pokemons" element={<MyPokemonsPage />} />
      </Routes>
    </Layout>
  )
}

export default App

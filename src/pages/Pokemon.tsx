import React, { Fragment, useState } from "react"

import PokemonSearch from "../components/pokemons/PokemonSearch"
import PokemonList from "../components/pokemons/PokemonList"
import PokemonData from "../models/pokemon-data"

function Pokemon(): JSX.Element {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [loadedPokemon, setLoadedPokemon] = useState<PokemonData[]>([])

  const searchPokemonHandler = (pokeId: number) => {
    setIsLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const pokemonData = {
          id: data.id,
          image: data.sprites.front_default,
          name: data.name,
          order: data.order,
        }

        setIsLoading(false)
        setLoadedPokemon([pokemonData])
        console.log(pokemonData)
      })
  }

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }

  return (
    <Fragment>
      <PokemonSearch onSerachPokemon={searchPokemonHandler} />
      {loadedPokemon &&< PokemonList pokemons={loadedPokemon}/>}
    </Fragment>
  )
}

export default Pokemon
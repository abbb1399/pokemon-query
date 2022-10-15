import React from "react"

import PokemonItem from "./PokemonItem"
import classes from "./PokemonList.module.css"
import PokemonData from '../../models/pokemon-data'

interface PokemonListProps{
  pokemons: PokemonData[]
}

function PokemonList({pokemons}:PokemonListProps): JSX.Element{
  return (
    <ul className={classes.list}>
      {pokemons.map((pokemon) => (
        <PokemonItem
          key={pokemon.id}
          id={pokemon.id}
          image={pokemon.image}
          name={pokemon.name}
          order={pokemon.order}
        />
      ))}
    </ul>
  )
}

export default PokemonList
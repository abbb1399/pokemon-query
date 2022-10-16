import React, {createContext, useState} from 'react'

import PokemonData from '../models/pokemon-data'
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

interface MyPokemonsContextInterface {
  myPokemons: PokemonData[]
  totalMyPokemons: number
  catchPokemon: (pokemon: PokemonData) => {} | void,
  releasePokemon: (pokemonId: number) => {} | void,
  pokemonIsCatched: (pokemonId: number) => {}
}

const MyPokemonsContext = createContext<MyPokemonsContextInterface | null>(null)

export function MyPokemonsContextProvider({ children }: { children: React.ReactNode }): JSX.Element{
  const [myPokemons, setMyPokemons] = useState<PokemonData[]>([])

  function catchPokemonHandler(pokemon: PokemonData){
    setMyPokemons((prevMyPokemons) => {
      return prevMyPokemons.concat(pokemon)
    })
    jsConfetti.addConfetti()
  }

  function releasePokemonHandler(pokemonId : number) {
    setMyPokemons((prevMyPokemons)=>{
      return prevMyPokemons.filter(pokemon => pokemon.id !== pokemonId)
    })
  } 

  function pokemonIsCatchedHandler(pokemonId: number){
    return myPokemons.some((pokemon) => pokemon.id === pokemonId)
  }

  const context: MyPokemonsContextInterface = {
    myPokemons: myPokemons,
    totalMyPokemons: myPokemons.length,
    catchPokemon: catchPokemonHandler,
    releasePokemon: releasePokemonHandler,
    pokemonIsCatched: pokemonIsCatchedHandler
  }

  return(
    <MyPokemonsContext.Provider value={context}>
      {children}
    </MyPokemonsContext.Provider>
  )
}

export default MyPokemonsContext
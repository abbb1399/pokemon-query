import { Fragment, useState } from "react"

import PokemonSearch from "../components/pokemons/PokemonSearch"
import PokemonList from "../components/pokemons/PokemonList"
import PokemonData from "../models/pokemon-data"
import ErrorMessages from "../models/error-messages"
import ErrorModal from "../components/ui/ErrorModal"
import Spinner from "../components/ui/Spinner"

function Pokemon(): JSX.Element {
  const [error, setError] = useState<ErrorMessages | null>()
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [loadedPokemon, setLoadedPokemon] = useState<PokemonData[]>([])

  const searchPokemonHandler = (pokeId: number) => {
    setIsLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then((response) => {
        return response.json()
      })
      .then(({ id, sprites, name }) => {
        const pokemonData: PokemonData = {
          id,
          image: sprites.front_default,
          name
        }

        setIsLoading(false)
        setLoadedPokemon([pokemonData])
      })
      .catch((err) => {
        setErrorMessageHandler({
          title: "Error!",
          message: "Sorry man. You sure you got the right pokemon id?",
        })
        setLoadedPokemon([])
        setIsLoading(false)
      })
  }

  function setErrorMessageHandler({ title, message }: ErrorMessages) {
    setError({ title, message })
  }

  function errorHandler() {
    setError(null)
  }

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <PokemonSearch
        onSerachPokemon={searchPokemonHandler}
        onErrorModal={setErrorMessageHandler}
      />
      {!isLoading && <PokemonList pokemons={loadedPokemon} />}
      {isLoading && <Spinner/>}
    </Fragment>
  )
}

export default Pokemon

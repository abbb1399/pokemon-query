import { Fragment, useState } from "react"

import PokemonSearch from "../components/pokemons/PokemonSearch"
import PokemonList from "../components/pokemons/PokemonList"
import PokemonData from "../models/pokemon-data"
import ErrorMessages from "../models/error-messages"
import ErrorModal from "../components/ui/ErrorModal"

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
      .then(({ id, sprites, name, order }) => {
        const pokemonData: PokemonData = {
          id,
          image: sprites.front_default,
          name,
          order,
        }

        setIsLoading(false)
        setLoadedPokemon([pokemonData])
      })
      .catch((err) => {
        setIsLoading(false)
        setError({
          title: "Error!",
          message: "Sorry man. You sure you got the right pokemon id?",
        })
      })
  }

  function setErrorMessageHandler({ title, message }: ErrorMessages) {
    setError({ title, message })
  }

  function errorHandler() {
    setError(null)
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
      {loadedPokemon && <PokemonList pokemons={loadedPokemon} />}
    </Fragment>
  )
}

export default Pokemon

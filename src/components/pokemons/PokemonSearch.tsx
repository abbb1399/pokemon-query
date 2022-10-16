import { FormEvent, useRef, Fragment } from "react"

import Card from "../ui/Card"
import classes from "./PokemonSearch.module.scss"

import ErrorMessages from "../../models/error-messages"

interface PokemonSearchProps {
  onSerachPokemon: (enteredId: number) => void
  onErrorModal: (errorMessages: ErrorMessages) => void
}

function PokemonSearch({
  onSerachPokemon,
  onErrorModal,
}: PokemonSearchProps): JSX.Element {
  const pokeIdRef = useRef<HTMLInputElement>(null)

  function submitHandler(e: FormEvent) {
    e.preventDefault()
    const enteredId = parseInt(pokeIdRef.current!.value)

    if (enteredId < 1) {
      onErrorModal({
        title: "Invalid Number",
        message: "Please enter a valid number (should be grater than zero).",
      })
      return
    }

    onSerachPokemon(enteredId)
    pokeIdRef.current!.value = ""
    pokeIdRef.current!.focus()
  }

  return (
    <Fragment>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="poke-id">Search Pokemons by ID</label>
          <div className={classes.actions}>
            <input
              type="number"
              autoComplete="off"
              required
              min={1}
              id="poke-id"
              placeholder="Enter a Pokemon ID"
              ref={pokeIdRef}
            />
            <button>Search</button>
          </div>
        </form>
      </Card>
    </Fragment>
  )
}

export default PokemonSearch

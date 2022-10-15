import React, { useState,useRef, Fragment } from "react"

import Card from "../ui/Card"
import classes from "./PokemonSearch.module.css"
import ErrorModal from "../ui/ErrorModal"

interface PokemonSearchProps {
  onSerachPokemon: (enteredId: number) => void
}

interface ErrorCondition{
  title: string
  message: string
}

function PokemonSearch({ onSerachPokemon }: PokemonSearchProps): JSX.Element {
  const [error, setError] = useState<ErrorCondition | null>()
  const pokeIdRef = useRef<HTMLInputElement>(null)

  function submitHandler(e: React.FormEvent) {
    e.preventDefault()
    const enteredId = parseInt(pokeIdRef.current!.value)

    if (enteredId < 1) {
      setError({
        title: "Invalid Number",
        message: "Please enter a valid number (should be grater than zero).",
      })
      return
    }

    onSerachPokemon(enteredId)
  }

  function errorHandler(){
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
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="poke-id">Search a Pokemon by ID</label>
            <input
              type="number"
              required
              min={1}
              id="poke-id"
              placeholder="Search a Pokemon"
              ref={pokeIdRef}
            />
          </div>
          <div className={classes.actions}>
            <button>Search</button>
          </div>
        </form>
      </Card>
    </Fragment>
  )
}

export default PokemonSearch
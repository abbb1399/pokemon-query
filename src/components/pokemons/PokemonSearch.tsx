import React, { useRef, Fragment } from "react"

import Card from "../ui/Card"
import classes from "./PokemonSearch.module.css"

interface PokemonSearchProps {
  onSerachPokemon: (enteredId: number) => void
}

function PokemonSearch({ onSerachPokemon }: PokemonSearchProps): JSX.Element {
  const pokeIdRef = useRef<HTMLInputElement>(null)

  function submitHandler(e: React.FormEvent) {
    e.preventDefault()
    const enteredId = parseInt(pokeIdRef.current!.value)

    onSerachPokemon(enteredId)
  }

  return (
    <Fragment>
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

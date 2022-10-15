import { useContext } from "react"

import Card from "../ui/Card"
import classes from "./PokemonItem.module.css"
import PokemonData from "../../models/pokemon-data"
import MyPokemonsContext from "../../store/my-pokemons-context"

function PokemonItem({ id, image, name, order }: PokemonData): JSX.Element {
  const myPokemonsCtx = useContext(MyPokemonsContext)

  const isFavorite = myPokemonsCtx!.pokemonIsCatched(id)

  const toggleCatchStatusHandler = () => {
    if (isFavorite) {
      myPokemonsCtx!.releasePokemon(id)
    } else {
      myPokemonsCtx!.catchPokemon({id, image, name, order})
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.content}>
          <h3># {order}</h3>
          <p>{name}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleCatchStatusHandler}>
            {isFavorite ? "Release" : `Catch`} {name} !
          </button>
        </div>
      </Card>
    </li>
  )
}

export default PokemonItem

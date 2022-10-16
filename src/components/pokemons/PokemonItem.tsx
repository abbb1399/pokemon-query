import { useContext } from "react"

import Card from "../ui/Card"
import classes from "./PokemonItem.module.scss"
import PokemonData from "../../models/pokemon-data"
import MyPokemonsContext from "../../store/my-pokemons-context"

function PokemonItem({ id, image, name }: PokemonData): JSX.Element {
  const myPokemonsCtx = useContext(MyPokemonsContext)
  
  const isCathed = myPokemonsCtx!.pokemonIsCatched(id)
  
  const badgeClasses = `${classes.button} ${isCathed ? classes.active : ''}`
 
  const toggleCatchStatusHandler = () => {
    if (isCathed) {
      myPokemonsCtx!.releasePokemon(id)
    } else {
      myPokemonsCtx!.catchPokemon({id, image, name})
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={name} />
        </div>
        <div className={classes.content}>
          <h3># {id}</h3>
          <p>{name} {isCathed && "cactched"}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleCatchStatusHandler} className={badgeClasses}>
            {isCathed ? "Release" : `Catch`} {name} !
          </button>
        </div>
      </Card>
    </li>
  )
}

export default PokemonItem

import React from "react"

import Card from "../ui/Card"
import classes from "./PokemonItem.module.css"
import PokemonData from "../../models/pokemon-data"

function PokemonItem({ image, name, order }: PokemonData): JSX.Element {
  return (
    <li className={classes.item}>
      <Card>
        <section>
          <div className={classes.image}>
            <img src={image} alt={name} />
          </div>
          <div className={classes.content}>
            <h3># {order}</h3>
            <p>{name}</p>
          </div>
          <div className={classes.actions}>
            <button>catch {name} !</button>
          </div>
        </section>
      </Card>
    </li>
  )
}

export default PokemonItem

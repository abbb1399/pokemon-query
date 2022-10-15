import { useContext } from "react"

import MyPokemonsContext from "../store/my-pokemons-context"
import PokemonList from "../components/pokemons/PokemonList"

function MyPokemons(): JSX.Element {
  const myPokemonsCtx = useContext(MyPokemonsContext)

  let content

  if (myPokemonsCtx!.totalMyPokemons === 0) {
    content = <p>no pokemons yet.</p>
  } else {
    content = <PokemonList pokemons={myPokemonsCtx!.myPokemons} />
  }

  return (
    <section>
      <h1>My Pokemons</h1>
      {content}
    </section>
  )
}

export default MyPokemons

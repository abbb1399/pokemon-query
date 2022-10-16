import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"

import classes from "./MainNavigation.module.scss"
import MyPokemonsContext from "../../store/my-pokemons-context"

function MainNavigation(): JSX.Element {
  const [pokemonIsCathed, setPokemonIsCatched] = useState(false)
  const myPokemonsCtx = useContext(MyPokemonsContext)
  const {totalMyPokemons} = myPokemonsCtx!

  const myPokemonsClasses = `${pokemonIsCathed ? classes.bump : ''}`
  
  useEffect(()=>{
    if(totalMyPokemons === 0){
      return
    }
    setPokemonIsCatched(true)

    const timer = setTimeout(() => {
      setPokemonIsCatched(false)
    }, 300);

    return ()=>{
      clearTimeout(timer)
    }
  },[totalMyPokemons])

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">Pokemon Query</Link>  
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/search">Search Pokemon</Link>
          </li>
          <li className={myPokemonsClasses}>
            <Link to="/my-pokemons">
              My Pokemons
              <span className={classes.badge}>
                {totalMyPokemons}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

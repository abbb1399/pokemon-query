import { useContext } from "react"
import { Link } from "react-router-dom"

import classes from "./MainNavigation.module.css"
import MyPokemonsContext from "../../store/my-pokemons-context"

function MainNavigation(): JSX.Element {
  const myPokemonsCtx = useContext(MyPokemonsContext)
 
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Pokemon Query</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Search Pokemon</Link>
          </li>
          <li>
            <Link to="/my-pokemons">
              My Pokemons
              <span className={classes.badge}>
                {myPokemonsCtx!.totalMyPokemons}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

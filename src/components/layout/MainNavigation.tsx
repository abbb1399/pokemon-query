import { useContext } from "react"
import { Link } from "react-router-dom"

import classes from "./MainNavigation.module.scss"
import MyPokemonsContext from "../../store/my-pokemons-context"

function MainNavigation(): JSX.Element {
  const myPokemonsCtx = useContext(MyPokemonsContext)
 
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

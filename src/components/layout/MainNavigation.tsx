import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation(): JSX.Element {
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
              <span className={classes.badge}>1</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

import classes from "./MainNavigation.module.css"

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Pokemon Query</div>
      <nav>
        <ul>
          <li>Search Pokemon</li>
          <li>My Pokemons</li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation

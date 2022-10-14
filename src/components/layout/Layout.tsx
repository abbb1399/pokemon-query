import MainNavigation from "./MainNavigation"
import Children from "../../models/children"
import classes from "./Layout.module.css"

function Layout({ children }: Children): JSX.Element {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  )
}

export default Layout

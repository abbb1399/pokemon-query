import React from "react"
import MainNavigation from "./MainNavigation"
import classes from "./Layout.module.scss"

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  )
}

export default Layout

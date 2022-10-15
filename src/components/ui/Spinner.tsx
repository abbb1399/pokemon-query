import classes from "./Spinner.module.css"

function Spinner():JSX.Element{
  return(
    <div className={classes.wrapper}>
      <div className={classes.spinner}></div>
    </div>
  )
}

export default Spinner
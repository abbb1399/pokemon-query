import classes from "./Card.module.css"
import Children from '../../models/children'

function Card({children} : Children){
  return <div className={classes.card}>
    {children}
  </div>
}
 
export default Card
import styles from "./Button.module.css"

const Button = (props) => {
   const {val,change}=props 
  return (
    <button className={styles.button} onClick={change}>{val}</button>
  )
}

export default Button
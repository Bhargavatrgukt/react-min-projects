import styles from "./Button.module.css"

export default function Button(props) {
   const {name}=props; 
  return (
    <button className={styles.butty}>{name}</button>
  )
}

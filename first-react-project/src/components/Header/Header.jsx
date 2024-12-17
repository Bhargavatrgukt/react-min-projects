import styles from "./Header.module.css";


function Header(){
return(
    <div className={styles.header}>
        <h1 className={styles.heading}>Counter</h1>
    </div>
)
}

export default Header
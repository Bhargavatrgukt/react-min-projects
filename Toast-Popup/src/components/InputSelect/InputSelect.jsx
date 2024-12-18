import styles from "./InputSelect.module.css"

const InputSelect = (props) => {
  const {values,onchange}=props  
  return (
    <select className={styles.input} onChange={onchange}>
        {values.map((value,index)=>(
            <option key={index} value={value} className={styles.option}>{value}</option>
        ))}
    </select>
  )
}

export default InputSelect
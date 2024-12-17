import { useState } from "react"
import "../Button/Button"
import Button from "../Button/Button"
import styles from "./Body.module.css"


const Body = () => {
  const [countObj,setCount]=useState({count:0,step:1})
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{countObj.count}</h1>
      <div className={styles.buttonsContainers}>
        <Button val="-" change={()=>setCount({...countObj,count:countObj.count - countObj.step})}/>
        <Button val="+"  change={()=>setCount({...countObj,count:countObj.count + countObj.step})}/>
      </div>  
      <div className={styles.buttonsContainers}>
        <p>Increment /Decrement By</p>
        <input  type="number" value={countObj.step} className={styles.input}
        onChange={(e) => setCount({ ...countObj, step: parseInt(e.target.value) })} />
      </div>
      <Button val="Reset" change={()=>setCount({...countObj,count:0})}/>
    </div>
  )
}

export default Body
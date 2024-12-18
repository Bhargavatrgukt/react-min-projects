import { useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import InputSelect from "../InputSelect/InputSelect"
import Message from "../Message/Message"
import styles from  "./Body.module.css"

const Body = () => {

  const [toastConfig,setToastConfig]=useState({
    position:{"horizontal":"Left","vertical":"Top"},
    type:"Normal",
    message:"This is a toast message!",
    duration:4,

  })  

  const [toastMessages, setToastMessages] = useState([]); // Toast messages array
  const timers = useRef([]); // To keep track of active timeouts

//   const [toastVisible, setToastVisible] = useState(false);
  
  const options=["Normal","Success","Error","Warning","Info"]  

  const handlePositionChange=(axis,value)=>{
    setToastConfig((prev)=>({
        ...prev,
        position:{...prev.position,[axis]:value}
    }))
    // console.log(toastConfig.position)
  }

  const handleTypeChange=(value)=>{
   setToastConfig((prev)=>(
    {
        ...prev,
        type:value,
    }
   ))
  }
  
  const handleMessageChange=(value)=>{
    setToastConfig((prev)=>(
        {
          ...prev,
          message:value
        }
    ))
  }

  const handleDurationChange=(event)=>{
    setToastConfig((prev)=>(
        {
          ...prev,
          duration:parseInt(event.target.value)
        }
    ))
  }

  const showToast = () => {
    const newToast = {
        id: uuidv4(),
        ...toastConfig,
    };

    // Add toast
    setToastMessages((prev) => [...prev, newToast]);

    // Set a timeout to remove the toast
    const timeoutId = setTimeout(() => {
        removeToast(newToast.id);
    }, toastConfig.duration * 1000);

    // Store the timeout ID
    timers.current.push(timeoutId);
};

const removeToast = (id) => {
    setToastMessages((prev) => prev.filter((toast) => toast.id !== id));
  };

useEffect(() => {
        // Clear all pending timeouts on component unmount
        timers.current.forEach((id) => clearTimeout(id));
}, []);

// useEffect(()=>{
//     console.log(toastMessages)
// },[toastMessages])


  return (
   <>
    <div className={styles.container}>
        <InputSelect values={["Left","Right"]} onchange={event=>handlePositionChange("horizontal", event.target.value)}/>
        <InputSelect values={["Top","Bottom"]} onchange={event=>handlePositionChange("vertical",event.target.value)}/>
        <InputSelect values={options} onchange={event=>handleTypeChange(event.target.value)} />
        <input type="text"  className={styles.input} defaultValue={toastConfig.message} onChange={event=>handleMessageChange(event.target.value)}/>
        <label htmlFor="duration" className={styles.flex}>Duration
            <input type="range" name="duration" id="duration" min={3} max={10} defaultValue={toastConfig.duration}  onChange={handleDurationChange} /></label>
        <button type="button" className={styles.button} onClick={showToast}>Show Toast</button>
    </div>
    {toastMessages.map((toast,index) => (
          <Message
            key={toast.id}
            toastConfig={toast}
            onClose={() => removeToast(toast.id)}
            index={index}
          />
        ))}
   </> 
  )
}

export default Body
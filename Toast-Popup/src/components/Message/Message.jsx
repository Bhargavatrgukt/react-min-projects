import styles from "./Message.module.css";

const Message = ({ toastConfig, onClose,  index }) => {
    let symbol;
    switch (toastConfig.type) {
        case "Success":
            symbol = "\u2714"; 
            break;
        case "Error":
            symbol = "\u2757"; 
            break;
        case "Warning":
            symbol = "\u26A0"; 
            break;
        case "Info":
            symbol = "\u1F6C8";
            break;
        default:
            symbol = "";
    }

  return (
    <div
      className={`${styles.message} ${styles[toastConfig.type.toLowerCase()]}`}
      style={{
        position: "absolute",
        [toastConfig.position.vertical.toLowerCase()]: `${20 + index * 60}px`, // Add vertical offset for each toast
        [toastConfig.position.horizontal.toLowerCase()]: "20px",
        zIndex: 9999 - index, // Ensure latest toast stays on top
      }}
    >
      <p className={styles.msg}><span className={styles.symbol}>{symbol}</span>{toastConfig.message}</p>
      <button className={styles.closeButton} onClick={onClose}>
        ✕
      </button>
    </div>
  );
};

export default Message;

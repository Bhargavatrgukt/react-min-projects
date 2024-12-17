import InputContainer from "../InputContainer/InputContainer";
import Button from "../Button/Button";
import styles from "./Body.module.css";
import { useState } from "react";

function Body() {
  const [stringObj, transformString] = useState({actualString:"hello world",transformedString:"hello world"});

  const buttonNames = [
    "Lower Case",
    "Upper Case",
    "Camel Case",
    "Pascal Case",
    "Snake Case",
    "Kebab Case",
    "Trim",
  ]; 

 
  const handleButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      const action = e.target.textContent;

      switch (action) {
        case "Lower Case":
          transformString({...stringObj,transformedString:stringObj.actualString.toLocaleLowerCase()});
          break;

        case "Upper Case":
          transformString({...stringObj,transformedString:stringObj.actualString.toUpperCase()});
          break;

        case "Camel Case":
          transformString({...stringObj,transformedString:stringObj.actualString.split(" ")
            .map((each, index) =>
              index === 0
                ? each.toLowerCase()
                : each[0].toUpperCase() + each.slice(1)
            )
            .join("")});
          break;

        case "Pascal Case":
          transformString({...stringObj,transformedString:stringObj.actualString.split(" ")
            .map((each) =>
              each ? each[0].toUpperCase() + each.slice(1) : ""
            )
            .join("")});
          break;

        case "Snake Case":
          transformString({...stringObj,transformedString:stringObj.actualString .split(" ")
            .map((each) => (each ? each.toLowerCase() : ""))
            .join("_")});
          break;

        case "Kebab Case":
          transformString({...stringObj,transformedString:stringObj.actualString .split(" ")
            .map((each) => (each ? each.toLowerCase() : ""))
            .join("-")});
          break;

        case "Trim":
          transformString({...stringObj,transformedString:stringObj.actualString.replace(/\s+/g, " ").trim()});
          break;

        default:
          break;
      }
    }
  };

  return (
    <div>
      <div className={styles.inputContainer}>
        <InputContainer change={(event)=>transformString({...stringObj,actualString:event.target.value,transformString:event.target.value})} />
        <div className={styles.gridContainer} onClick={handleButtonClick}>
            {buttonNames.map((name, index) => (
            <Button name={name} key={index} />
            ))}
        </div>
        <h2>Transformed String</h2>
        <p>{stringObj.transformedString}</p>
      </div>
    </div>
  );
}

export default Body;

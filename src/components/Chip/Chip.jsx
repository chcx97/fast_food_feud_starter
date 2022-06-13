import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false }) {
  var buttonClassName;
  if(isActive == false){
    buttonClassName = "chip";
  }
  if (isActive == true){
    buttonClassName = "chip active";
    console.log(buttonClassName);
  }
  return (
    <button className={buttonClassName}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip

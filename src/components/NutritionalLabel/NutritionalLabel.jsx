import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  const {item} = props;
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">{nutritionFacts.map((facts)=>(
        <NutritionalLabelFact nutritionalLabel={facts} item = {props.item} key={facts.id} />
      ))}
      </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  console.log(props.item[props.nutritionalLabel.attribute]);
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.nutritionalLabel.label}</span>{" "}
      <span className="fact-value">{props.item[props.nutritionalLabel.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel

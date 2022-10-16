import React from "react";
import "./Synonyms.css";

function handleClick(event) {
  event.preventDefault();
  console.log(event.target.id);
}
export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <ul>
          {props.synonyms.map((synonym, index) => {
            return (
              <li key={index} id={synonym} onClick={handleClick}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

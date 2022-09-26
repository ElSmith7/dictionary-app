import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  function handleClick(event) {
    console.log(event.currentTarget.id);
  }

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

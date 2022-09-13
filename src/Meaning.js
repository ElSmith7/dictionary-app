import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 1) {
          return (
            <div className="meanings" key={index}>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

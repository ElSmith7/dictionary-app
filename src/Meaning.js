import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div className="meanings">
            {definition.definition}
            <br />
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 1) {
          return (
            <div key={index}>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </div>
          );
        } else {
          return null;
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}

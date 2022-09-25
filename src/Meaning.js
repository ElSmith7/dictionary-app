import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        if (index < 1) {
          return (
            <div key={index}>
              <div className="definition"> {definition.definition}</div>
              <div className="example">{definition.example}</div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}

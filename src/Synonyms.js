import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="synonyms">
        <ul>
          {props.synonyms.map((synonym, index) => {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>{" "}
      </div>
    );
  } else {
    return null;
  }
}

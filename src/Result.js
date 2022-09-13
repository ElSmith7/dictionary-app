import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="result">
        <h2>{props.result.word}</h2>
        {props.result.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="phonetics">
        {props.phonetics.text}
        <br />
        <a href={props.phonetics.audio}>Audio</a>}
      </div>
    );
  } else {
    return null;
  }
}

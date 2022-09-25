import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="phonetics">
        <div className="phonetic-text">{props.phonetics.text}</div>

        <ReactAudioPlayer
          className="phonetic-audio"
          src={props.phonetics.audio}
          controls
        />
      </div>
    );
  } else {
    return null;
  }
}

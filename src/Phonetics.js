import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="phonetics">
        {props.phonetics.text}
        <br />
        <ReactAudioPlayer src={props.phonetics.audio} controls />
      </div>
    );
  } else {
    return null;
  }
}

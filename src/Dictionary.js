import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function handleResponse(response) {
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function wordSearched(event) {
    setWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={handleSubmit}>
        <input type="text" autoComplete="off" onChange={wordSearched} />
        <input type="submit" />
      </form>
    </div>
  );
}

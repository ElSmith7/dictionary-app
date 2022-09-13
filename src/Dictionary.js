import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
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
      <Result result={result} />
    </div>
  );
}

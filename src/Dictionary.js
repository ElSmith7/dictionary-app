import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";
import axios from "axios";

export default function Dictionary(props) {
  const [word, setWord] = useState("leaf");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function load() {
    setLoaded(true);
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function wordSearched(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            placeHolder={props.suggestedSearch}
            onChange={wordSearched}
          />
          <input type="submit" />
        </form>
        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}

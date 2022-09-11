import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${word} `);
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

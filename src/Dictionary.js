import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {
  const hello = useSelector((state) => state.hello);
  const [word, setWord] = useState("leaf");
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function load() {
    setLoaded(true);
    search();
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey = `563492ad6f91700001000001f8c251ed6a594872bacfe286e28414e4`;
    let pexelsUrl = `https://api.pexels.com/v1/search/?page=1&per_page=6&query=${word}`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
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
        <ul>
          {hello.map((test) => (
            <li key={test.greeting}>
              <h3>{test.greeting}</h3>
              <div>Views: {test.gesture}</div>
            </li>
          ))}
        </ul>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              autoComplete="off"
              placeholder={props.suggestedSearch}
              onChange={wordSearched}
            />
          </form>
          <div className="suggested-search">
            suggested searches: forest, embroidery, stein, fascinator...
          </div>
        </section>
        <Result result={result} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}

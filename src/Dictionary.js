import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";
import axios from "axios";

export default function Dictionary(props) {
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
    searchPictures();
  }

  function handleUnsplashResponse(response) {
    setPhotos(response.data.results);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  async function searchPictures() {
    const response = await axios.get(
      "https://api.unsplash.com/search/photos?per_page=6&orientation=landscape",

      {
        headers: {
          Authorization:
            "Client-ID sUSnATSWfN1FiDEZ7JGUsqYyB_9LftXvZ_DfHXb4duE",
        },
        params: { query: `${word}` },
      }
    );
    handleUnsplashResponse(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    searchPictures();
  }

  function wordSearched(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="dictionary">
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

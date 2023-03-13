import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header>
          <h1>
            <i className="fa-solid fa-book-open d-none d-md-inline" />{" "}
            Dictionary
          </h1>
        </header>
        <div className="container">
          <Dictionary suggestedSearch="leaf" />
        </div>
        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ElSmith7/react-dictionary-app"
          >
            <i className="fa-brands fa-github"></i> Open source code
          </a>{" "}
          by Eleanor Smith
        </footer>
      </div>
    </div>
  );
}

export default App;

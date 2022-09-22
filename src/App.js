import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <i class="fa-solid fa-book-open" /> Dictionary
        </h1>
      </header>
      <div className="container">
        <Dictionary suggestedSearch="leaf" />
      </div>
      <footer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ElSmith7/react-dictionary-app"
        >
          <i class="fa-brands fa-github"></i> Open source code
        </a>{" "}
        by Eleanor Smith
      </footer>
    </div>
  );
}

export default App;

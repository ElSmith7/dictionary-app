import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header></header>
        <Dictionary />
      </div>
      <footer className="text-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ElSmith7/react-dictionary-app"
        >
          Open source code
        </a>{" "}
        by Eleanor Smith
      </footer>
    </div>
  );
}

export default App;

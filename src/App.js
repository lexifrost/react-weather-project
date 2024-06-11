import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tokyo" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/lexifrost" target="_blank" rel="noreferrer">
          Lexi Frost
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/lexifrost/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

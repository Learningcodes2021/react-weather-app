import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather />
      <footer>
        Open-source code by{" "}
        <a
          href="https://github.com/Learningcodes2021/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jacqueline Berry
        </a>
      </footer>
    </div>
  );
}

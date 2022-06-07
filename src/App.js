
import './App.css';
import Weather from "./Weather";


export default function App() {
  return (
    <div className="container">
      <Weather defaultCity="lagos" />
      <footer>
        This project was created by Hajarah{" "}
        <a
          href="https://github.com/Hajarah08/weather-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          open sourced github
        </a>
      </footer>
    </div>
  );
}

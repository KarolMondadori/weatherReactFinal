import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
     <Weather />
     <p>
        This project was coded by Karol Mondadori and is
        <a href="https://github.com/KarolMondadori/WeatherAppReactFinal" target="_blank"> open-source on GitHub </a>
      </p>
      </div>
    </div>

  );
}

export default App;
import { useState } from "react";
import "./App.css";

function App() {
  const [flight, setFlight] = useState("");
  const [info, setInfo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = async () => {
    const res = await fetch(`http://localhost:4000/api/flight/${flight}`);
    const data = await res.json();
    setInfo(data);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
        <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
      </div>

      <div className="tracker-box">
        <h1>✈️ Flight Tracker</h1>
        <div className="search-bar">
          <input
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
            placeholder="Enter Flight Number (e.g., AI202)"
          />
          <button onClick={handleSearch}>Track</button>
        </div>

        {info && (
          <div className="result-card">
            <h3>
              {info.flight} - {info.airline}
            </h3>
            <p>
              <b>From:</b> {info.from}
            </p>
            <p>
              <b>To:</b> {info.to}
            </p>
            <p>
              <b>Status:</b> {info.status}
            </p>
            <p>
              <b>Departure:</b> {info.departure_time}
            </p>
            <p>
              <b>Arrival:</b> {info.arrival_time}
            </p>
          </div>
        )}
      </div>

      <footer>Built with ❤️ using React + AviationStack API</footer>
    </div>
  );
}

export default App;

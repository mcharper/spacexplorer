import React from "react";
import "./App.css";
import { LaunchLister } from "./components/LaunchLister/LaunchLister";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacexplorer</h1>

        <LaunchLister />
      </header>
    </div>
  );
}

export default App;

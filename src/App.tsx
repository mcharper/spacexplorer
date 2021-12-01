import React from "react";
import "./App.css";
import { LaunchLister } from "./components/LaunchLister/LaunchLister";
import { useLaunchService } from "./hooks/useLaunchService";
import { LaunchSummary } from "./models/LaunchSummary";

function App() {
  const LAUNCH_COUNT = 50;

  const launchHookResult = useLaunchService(LAUNCH_COUNT);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Space
          <span className="header-decoration">X</span>
          plorer
        </h1>
      </header>

      <LaunchLister launchList={launchHookResult.launchList} />
    </div>
  );
}

export default App;

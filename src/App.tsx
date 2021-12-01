import React from "react";
import "./App.css";
import { LaunchLister } from "./components/LaunchLister/LaunchLister";
import { useLaunchService } from "./hooks/useLaunchService";
import { LaunchSummary } from "./models/LaunchSummary";

function App() {
  const launchHookResult = useLaunchService();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacexplorer</h1>

        <LaunchLister launchList={launchHookResult.launchList} />
      </header>
    </div>
  );
}

export default App;

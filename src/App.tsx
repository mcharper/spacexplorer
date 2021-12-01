import React from "react";
import "./App.css";
import { LaunchLister } from "./components/LaunchLister/LaunchLister";
import { LaunchSummary } from "./models/LaunchSummary";

function App() {
  const launchList: LaunchSummary[] = [
    {
      rocketName: "X",
      launchDateUtc: "2017-06-23T19:10:000Z",
      nationality: "UK",
    },
    {
      rocketName: "Y",
      launchDateUtc: "2017-06-23T19:10:000Z",
      nationality: "USA",
    },
    {
      rocketName: "Z",
      launchDateUtc: "2017-06-23T19:10:000Z",
      nationality: "CHINA",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacexplorer</h1>

        <LaunchLister launchList={launchList} />
      </header>
    </div>
  );
}

export default App;

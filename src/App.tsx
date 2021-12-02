import { LaunchLister } from "./components/LaunchLister/LaunchLister";
import { LaunchDetailViewer } from "./components/LaunchDetailViewer/LaunchDetailViewer";
import { useLaunchService } from "./hooks/useLaunchService";

import "./App.css";

const LAUNCH_COUNT = 50;

function App() {
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

      <div id="container">
        {launchHookResult.isLoading ? (
          "Loading ..."
        ) : (
          <>
            <LaunchLister
              launchList={launchHookResult.launchList}
              setCurrentRocketId={launchHookResult.setCurrentRocketId}
            />
            {launchHookResult.rocketDetails && (
              <LaunchDetailViewer
                rocketDetails={launchHookResult.rocketDetails}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;

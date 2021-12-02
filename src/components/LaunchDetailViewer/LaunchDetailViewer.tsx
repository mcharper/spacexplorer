import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsAltV,
  faCircle,
  faCoffee,
  faDollarSign,
  faFlag,
} from "@fortawesome/free-solid-svg-icons";

import { LaunchDetailViewerProps } from "./LaunchDetailViewerProps";
import { useLaunchDetailViewerStyles } from "./hooks/useLaunchDetailViewerStyles";

export const LaunchDetailViewer = (
  props: LaunchDetailViewerProps
): JSX.Element => {
  const classes = useLaunchDetailViewerStyles();

  return (
    <div className={classes.detailView}>
      <h2>Launch Details</h2>

      {props.rocketDetails?.id ? (
        <>
          <div className={classes.imageArea}>
            {props.rocketDetails.images?.length > 0 ? (
              <>
                <img
                  src={props.rocketDetails.images[0]}
                  alt={props.rocketDetails.name}
                />
                <caption>
                  Image of {props.rocketDetails.name} via flickr
                </caption>
              </>
            ) : (
              <img src="logo192.png" />
            )}
          </div>

          <div className={classes.vitalStatisticsArea}>
            <h3>Vital Statistics</h3>

            <ul>
              <li>
                <FontAwesomeIcon icon={faArrowsAltV} />
                Type: {props.rocketDetails.type}
              </li>
              <li>
                <FontAwesomeIcon icon={faCircle} />
                Diameter: {props.rocketDetails.diameter}m
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowsAltV} /> Height:{" "}
                {props.rocketDetails.height}m
              </li>
              <li>
                <FontAwesomeIcon icon={faFlag} />
                Country: {props.rocketDetails.country}
              </li>
              <li>
                <FontAwesomeIcon icon={faDollarSign} />
                Cost per Launch: USD {props.rocketDetails.costPerLaunch}
              </li>
            </ul>
          </div>

          <div className={classes.descriptionArea}>
            <h3>About {props.rocketDetails.name}</h3>
            <p>{props.rocketDetails?.description}</p>
          </div>
        </>
      ) : (
        <div className={classes.imageArea}>
          <p>
            Click on the rocket id in the table to see details of the rocket
            that was used for a particular launch.
          </p>
          <img
            id="splash"
            src="spacex_splash.jpg"
            alt="Exciting depiction of STP-2 Mission rocket takeoff"
          />
        </div>
      )}
    </div>
  );
};

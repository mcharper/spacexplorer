import { LaunchDetailViewerProps } from "./LaunchDetailViewerProps";

import { useLaunchDetailViewerStyles } from "./hooks/useLaunchDetailViewerStyles";

export const LaunchDetailViewer = (
  props: LaunchDetailViewerProps
): JSX.Element => {
  const classes = useLaunchDetailViewerStyles();

  return (
    <div className={classes.detailView}>
      <h2>Launch Details</h2>

      <div className={classes.imageArea}>
        {props.rocketDetails.images?.length > 0 && (
          <img
            src={props.rocketDetails.images[0]}
            alt={props.rocketDetails.name}
          />
        )}
      </div>

      <div className={classes.vitalStatisticsArea}>
        <h3>Vital Statistics</h3>

        <ul>
          <li>Type: {props.rocketDetails.type}</li>
          <li>Diameter: {props.rocketDetails.diameter}m</li>
          <li>Height: {props.rocketDetails.height}m</li>
          <li>Country: {props.rocketDetails.country}</li>
          <li>Cost per Launch: USD {props.rocketDetails.costPerLaunch}</li>
        </ul>
      </div>

      <div className={classes.descriptionArea}>
        <h3>About {props.rocketDetails.name}</h3>
        <p>{props.rocketDetails?.description}</p>
      </div>
    </div>
  );
};

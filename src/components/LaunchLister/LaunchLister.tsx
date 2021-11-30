import React from "react";
import { useLaunchListerStyles } from "./hooks/useLaunchListerStyles";

export const LaunchLister = (): JSX.Element => {
  const classes = useLaunchListerStyles();

  return (
    <div>
      <h2>Launch List</h2>
    </div>
  );
};

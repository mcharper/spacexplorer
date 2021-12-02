import { AgGridReact, AgGridColumn } from "ag-grid-react";

import { LaunchListerProps } from "./LaunchListerProps";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { useLaunchListerStyles } from "./hooks/useLaunchListerStyles";

export const LaunchLister = (props: LaunchListerProps): JSX.Element => {
  const classes = useLaunchListerStyles();

  return (
    <div>
      <h2>Launch List</h2>

      <div className={classes.launchList + " ag-theme-alpine"}>
        <AgGridReact rowData={props.launchList}>
          <AgGridColumn
            field="missionName"
            sortable={true}
            filter={true}
          ></AgGridColumn>

          <AgGridColumn
            field="launchDateUtc"
            sortable={true}
            cellRenderer={(params) =>
              params.value ? new Date(params.value).toLocaleDateString() : ""
            }
          ></AgGridColumn>

          <AgGridColumn
            field="rocketId"
            onCellClicked={(e) => {
              props.setCurrentRocketId(e.value);
            }}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
};

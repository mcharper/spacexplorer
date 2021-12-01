import { rest } from "msw";
import { LaunchSummary } from "../models/LaunchSummary";

const launchList: any[] = [
  {
    mission_name: "X",
    launch_date_utc: "2021-12-01T17:00Z",
    details: "X Details",
  },
];

export const getLaunchList = rest.get(
  "*api.spacexdata.com/v3/launches/past",
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(launchList));
  }
);

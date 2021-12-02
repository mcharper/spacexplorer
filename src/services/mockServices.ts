import { rest } from "msw";

const launchList: any[] = [
  {
    mission_name: "X",
    launch_date_utc: "2021-12-01T17:00Z",
    rocket: {
      rocket_id: "falcon1",
      rocket_name: "Falcon",
      rocket_type: "X",
    },
  },
];

const rocketDetails: any = {
  rocket_id: "falcon1",
  name: "Falcon",
  height: {
    meters: 70,
  },
  diameter: {
    meters: 3,
  },
  something_else: "Something",
};

export const getLaunchList = rest.get(
  "*api.spacexdata.com/v3/launches/past",
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(launchList));
  }
);

export const getRocketDetails = rest.get(
  "*api.spacexdata.com/v3/launches/rockets/falcon9",
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(rocketDetails));
  }
);

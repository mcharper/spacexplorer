import { render, screen, within } from "@testing-library/react";
import { LaunchSummary } from "../../models/LaunchSummary";
import { Mappers } from "../mappers";

describe("The mappers", () => {
  test("mapLaunchSummaryData maps recognised incoming properties to their counterparts", () => {
    const mappedObject = Mappers.mapLaunchSummaryData({
      mission_name: "X",
      launch_date_utc: "2021-12-01T17:00Z",
      details: "X Details",
    });

    expect(mappedObject.missionName).toEqual("X");
    expect(mappedObject.launchDateUtc).toEqual("2021-12-01T17:00Z");
    expect(mappedObject.details).toEqual("X Details");
  });

  test("mapLaunchSummaryData is not fazed by incoming properties with no mapping", () => {
    const mappedObject = Mappers.mapLaunchSummaryData({
      mission_name: "X",
      launch_date_utc: "2021-12-01T17:00Z",
      details: "X Details",
      something_we_do_not_map: "Something",
    });

    expect(mappedObject.missionName).toEqual("X");
    expect(mappedObject.launchDateUtc).toEqual("2021-12-01T17:00Z");
    expect(mappedObject.details).toEqual("X Details");
  });
});

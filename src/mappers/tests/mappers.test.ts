import { Mappers } from "../mappers";

describe("The mappers", () => {
  test("mapLaunchSummaryData maps recognised incoming properties to their counterparts", () => {
    const mappedObject = Mappers.mapLaunchSummaryData({
      mission_name: "X",
      launch_date_utc: "2021-12-01T17:00Z",
      rocket: {
        rocket_id: "falcon1",
        rocket_name: "Falcon",
        rocket_type: "X",
      },
    });

    expect(mappedObject.missionName).toEqual("X");
    expect(mappedObject.launchDateUtc).toEqual("2021-12-01T17:00Z");
    expect(mappedObject.rocketId).toEqual("falcon1");
  });

  test("mapLaunchSummaryData is not fazed by incoming properties with no mapping", () => {
    const mappedObject = Mappers.mapLaunchSummaryData({
      mission_name: "X",
      launch_date_utc: "2021-12-01T17:00Z",
      rocket: {
        rocket_id: "falcon1",
        rocket_name: "Falcon",
        rocket_type: "X",
      },
      something_else: "Something",
    });

    expect(mappedObject.missionName).toEqual("X");
    expect(mappedObject.launchDateUtc).toEqual("2021-12-01T17:00Z");
    expect(mappedObject.rocketId).toEqual("falcon1");
  });

  test("mapRocketDetails maps recognised incoming properties to their counterparts", () => {
    const mappedObject = Mappers.mapRocketDetails({
      rocket_id: "falcon1",
      name: "Falcon",
      type: "X",
      description: "A rocket",
      flickr_images: ["http://www.test.com/img1"],
      stages: 2,
      cost_per_launch: 50000000,
      country: "United States",
      height: {
        meters: 70,
      },
      diameter: {
        meters: 3,
      },
    });

    expect(mappedObject.id).toEqual("falcon1");
    expect(mappedObject.name).toEqual("Falcon");
    expect(mappedObject.type).toEqual("X");
    expect(mappedObject.description).toEqual("A rocket");
    expect(mappedObject.images).toHaveLength(1);
    expect(mappedObject.stages).toEqual(2);
    expect(mappedObject.costPerLaunch).toEqual(50000000);
    expect(mappedObject.country).toEqual("United States");
    expect(mappedObject.height).toEqual(70);
    expect(mappedObject.diameter).toEqual(3);
  });

  test("mapRocketDetails is not fazed by incoming properties with no mapping", () => {
    const mappedObject = Mappers.mapRocketDetails({
      rocket_id: "falcon1",
      name: "Falcon",
      height: {
        meters: 70,
      },
      diameter: {
        meters: 3,
      },
      something_else: "Something",
    });

    expect(mappedObject.id).toEqual("falcon1");
    expect(mappedObject.name).toEqual("Falcon");
  });
});

import { LaunchSummary } from "../models/LaunchSummary";

export class Services {
  private static launchList: LaunchSummary[] = [
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

  public static async getRecentLaunches(
    launchCount: number
  ): Promise<LaunchSummary[]> {
    return Promise.resolve(Services.launchList);
  }
}

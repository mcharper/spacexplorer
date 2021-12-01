import axios from "axios";
import { Mappers } from "../mappers/mappers";
import { LaunchSummary } from "../models/LaunchSummary";

export class Services {
  public static async getRecentLaunches(
    launchCount: number
  ): Promise<LaunchSummary[]> {
    // Using "any" here because I don't want to define the whole
    // result shape from the API at this point, I'm just going
    // to map the cherry-picked data I want for the app
    const launchListResponse = await axios.get<Promise<any[]>>(
      `https://api.spacexdata.com/v3/launches/past?limit=${launchCount}`
    );

    if (launchListResponse.status === 200) {
      const launchList: LaunchSummary[] = (await launchListResponse.data).map(
        Mappers.mapLaunchSummaryData
      );
      return launchList;
    } else {
      throw new Error(`Could not retrieve launch list`);
    }
  }
}

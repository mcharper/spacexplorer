import { LaunchSummary } from "../models/LaunchSummary";

export class Mappers {
  public static mapLaunchSummaryData = (launch: any): LaunchSummary => {
    return {
      missionName: launch.mission_name,
      launchDateUtc: launch.launch_date_utc,
      details: launch.details,
    };
  };
}

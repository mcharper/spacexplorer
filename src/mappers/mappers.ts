import { LaunchSummary } from "../models/LaunchSummary";
import { RocketDetails } from "../models/RocketDetails";

export class Mappers {
  public static mapLaunchSummaryData = (launch: any): LaunchSummary => {
    return {
      missionName: launch.mission_name,
      launchDateUtc: launch.launch_date_utc,
      rocketId: launch.rocket.rocket_id,
    };
  };

  public static mapRocketDetails = (rocketDetails: any): RocketDetails => {
    return {
      id: rocketDetails.rocket_id,
      name: rocketDetails.name,
      type: rocketDetails.type,
      description: rocketDetails.description,
      images: rocketDetails.flickr_images,
      stages: rocketDetails.stages,
      costPerLaunch: rocketDetails.cost_per_launch,
      country: rocketDetails.country,
      height: rocketDetails.height?.meters,
      diameter: rocketDetails.diameter?.meters,
    };
  };
}

import { LaunchSummary } from "./LaunchSummary";
import { RocketDetails } from "./RocketDetails";

export interface LaunchServiceResult {
  isLoading: boolean;
  launchList: LaunchSummary[];
  setCurrentRocketId: (rocketId: string) => void;
  rocketDetails: RocketDetails | undefined;
}

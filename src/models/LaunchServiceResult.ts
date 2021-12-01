import { LaunchSummary } from "./LaunchSummary";

export interface LaunchServiceResult {
  isLoading: boolean;
  launchList: LaunchSummary[];
}

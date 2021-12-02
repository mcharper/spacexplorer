import { LaunchSummary } from "../../models/LaunchSummary";

export interface LaunchListerProps {
  launchList: LaunchSummary[];
  setCurrentRocketId: (rocketDetailId: string) => void;
}

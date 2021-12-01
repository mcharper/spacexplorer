import { useEffect, useState } from "react";

import { LaunchServiceResult } from "../models/LaunchServiceResult";
import { LaunchSummary } from "../models/LaunchSummary";
import { Services } from "../services/services";

export const useLaunchService = (): LaunchServiceResult => {
  const [launchList, setLaunchList] = useState<LaunchSummary[]>([]);

  useEffect(() => {
    getRecentLaunches(50);
  });

  const getRecentLaunches = async (launchCount: number) => {
    const recentLaunches = await Services.getRecentLaunches(launchCount);
    setLaunchList(recentLaunches);
  };

  return {
    launchList,
  };
};
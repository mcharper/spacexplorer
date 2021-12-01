import { useEffect, useState } from "react";

import { LaunchServiceResult } from "../models/LaunchServiceResult";
import { LaunchSummary } from "../models/LaunchSummary";
import { Services } from "../services/services";

export const useLaunchService = (launchCount: number): LaunchServiceResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [launchList, setLaunchList] = useState<LaunchSummary[]>([]);

  useEffect(() => {
    getRecentLaunches(launchCount);
  }, []);

  const getRecentLaunches = async (launchCount: number) => {
    setIsLoading(true);
    const recentLaunches = await Services.getRecentLaunches(launchCount);
    setLaunchList(recentLaunches);
    setIsLoading(false);
  };

  return {
    isLoading,
    launchList,
  };
};

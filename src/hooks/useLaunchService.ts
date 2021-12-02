import { useEffect, useState } from "react";

import { LaunchServiceResult } from "../models/LaunchServiceResult";
import { LaunchSummary } from "../models/LaunchSummary";
import { RocketDetails } from "../models/RocketDetails";
import { Services } from "../services/services";

export const useLaunchService = (launchCount: number): LaunchServiceResult => {
  const [isLoading, setIsLoading] = useState(true);
  const [launchList, setLaunchList] = useState<LaunchSummary[]>([]);
  const [currentRocketId, setCurrentRocketId] = useState("");
  const [rocketDetails, setRocketDetails] = useState<RocketDetails>();

  useEffect(() => {
    getRecentLaunches(launchCount);
  }, []);

  useEffect(() => {
    getRocketDetails(currentRocketId);
  }, [currentRocketId]);

  const getRecentLaunches = async (launchCount: number) => {
    const recentLaunches = await Services.getRecentLaunches(launchCount);
    setLaunchList(recentLaunches);
    setIsLoading(false);
  };

  const getRocketDetails = async (rocketId: string) => {
    setIsLoading(true);
    const rocketDetails = await Services.getRocketDetails(rocketId);
    setRocketDetails(rocketDetails);
    setIsLoading(false);
  };

  return {
    isLoading,
    launchList,
    setCurrentRocketId,
    rocketDetails,
  };
};

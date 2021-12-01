import { renderHook } from "@testing-library/react-hooks";
import { setupServer, SetupServerApi } from "msw/node";

import { useLaunchService } from "../useLaunchService";
import { getLaunchList } from "../../services/mockServices";

describe("Hook test", () => {
  let server: SetupServerApi;

  beforeAll(() => {
    server = setupServer(getLaunchList);
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  test("sets and resets loading indicator appropriately", async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useLaunchService(50)
    );

    expect(result.current.isLoading).toBe(true);
    await waitForValueToChange(() => result.current.isLoading);
    expect(result.current.isLoading).toBe(false);
  });

  test("returns the launch list on invocation", async () => {
    const { result, waitForValueToChange } = renderHook(() =>
      useLaunchService(50)
    );

    expect(result.current.isLoading).toBe(true);
    await waitForValueToChange(() => result.current.isLoading);
    expect(result.current.launchList).toHaveLength(1);
  });
});

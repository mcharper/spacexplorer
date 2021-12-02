import { render, screen, waitFor } from "@testing-library/react";
import { setupServer, SetupServerApi } from "msw/node";

import App from "./App";
import { getLaunchList, getRocketDetails } from "./services/mockServices";

describe("The app component", () => {
  let server: SetupServerApi;

  beforeAll(() => {
    server = setupServer(getLaunchList, getRocketDetails);
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  test("renders the app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Space.*?plorer/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders the loading indicator on the home page while loading", () => {
    render(<App />);
    const launchListTitleElement = screen.getByText(/Loading/i);
    expect(launchListTitleElement).toBeInTheDocument();
  });

  test("renders the launch lister on the home page after loading", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
    });

    const launchListTitleElement = screen.getByText(/Launch List/i);
    expect(launchListTitleElement).toBeInTheDocument();
  });
});

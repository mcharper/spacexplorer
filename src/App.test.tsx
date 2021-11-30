import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Spacexplorer/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders the launch lister on the home page", () => {
  render(<App />);
  const launchListTitleElement = screen.getByText(/Launch List/i);
  expect(launchListTitleElement).toBeInTheDocument();
});

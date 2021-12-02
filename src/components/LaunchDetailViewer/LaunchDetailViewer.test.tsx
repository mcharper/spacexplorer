import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LaunchDetailViewer } from "./LaunchDetailViewer";
import { RocketDetails } from "../../models/RocketDetails";

let rocketDetails: RocketDetails;

beforeAll(() => {
  rocketDetails = {
    id: "falcon9",
    name: "Falcon",
    type: "X",
    description: "Description",
    images: ["http://www.test.com/img1"],
    stages: 2,
    costPerLaunch: 50000000,
    country: "United States",
    height: 30,
    diameter: 10,
  };
});

test("renders an image if there is one", () => {
  render(<LaunchDetailViewer rocketDetails={rocketDetails} />);

  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("renders an alt tag for the image if there is one", () => {
  render(<LaunchDetailViewer rocketDetails={rocketDetails} />);

  const altTag = screen.getByAltText(/Falcon/);
  expect(altTag).toBeInTheDocument();
});

test("renders a section labelled Vital Statistics", () => {
  render(<LaunchDetailViewer rocketDetails={rocketDetails} />);

  const sectionHeader = screen.getByText("Vital Statistics");
  expect(sectionHeader).toBeInTheDocument();
});

test("Vital Statistics section contains the right properties with the right values", () => {
  render(<LaunchDetailViewer rocketDetails={rocketDetails} />);

  const sectionHeader = screen.getByText("Vital Statistics");

  if (sectionHeader.parentElement) {
    expect(screen.getByText("Type: X")).toBeInTheDocument();
    expect(screen.getByText("Diameter: 10m")).toBeInTheDocument();
    expect(screen.getByText("Height: 30m")).toBeInTheDocument();
    expect(screen.getByText("Country: United States")).toBeInTheDocument();
    expect(
      screen.getByText("Cost per Launch: USD 50000000")
    ).toBeInTheDocument();
  }
});

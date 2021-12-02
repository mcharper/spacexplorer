import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LaunchLister } from "./LaunchLister";
import { LaunchSummary } from "../../models/LaunchSummary";

let launchList: LaunchSummary[];

beforeAll(() => {
  launchList = [
    {
      missionName: "Mission-X",
      launchDateUtc: "2017-06-23T19:10:000Z",
      rocketId: "falcon1",
    },
    {
      missionName: "Mission-Y",
      launchDateUtc: "2017-06-24T19:10:000Z",
      rocketId: "falcon1",
    },
    {
      missionName: "Mission-Z",
      launchDateUtc: "2017-06-25T19:10:000Z",
      rocketId: "falcon1",
    },
  ];
});

test("renders a grid to display the list", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const grid = screen.getByRole("grid");
  expect(grid).toBeInTheDocument();
});

test("renders a header for each column represented in the data", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );
  const columnHeaders = screen.getAllByRole("columnheader");
  expect(columnHeaders).toHaveLength(3);
});

test("renders right text for each column header", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const columnHeaders = screen.getAllByRole("columnheader");

  expect(within(columnHeaders[0]).getByText(/Mission Name/)).not.toBeNull();
  expect(within(columnHeaders[1]).getByText(/Launch Date Utc/)).not.toBeNull();
  expect(within(columnHeaders[2]).getByText(/Rocket Id/)).not.toBeNull();
});

test("renders grid cells to display the data", () => {
  // agGrid creates elements with the role "gridcell"
  // for each column, for each row of data
  const expectedGridCellCount = launchList.length * 3;

  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const grid = screen.getByRole("grid");
  const gridCellCount = within(grid).getAllByRole("gridcell");
  expect(gridCellCount).toHaveLength(expectedGridCellCount);
});

// TODO: This may be a false positive - fix this
test("clicking on the mission name column header once sorts the data in ascending alphabetical order", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const missionNameHeader = screen.getByText("Mission Name");
  userEvent.click(missionNameHeader);

  const valuesInColumn = screen.queryAllByText(/Mission-/);
  expect(within(valuesInColumn[0]).queryAllByText(/Mission-X/)).toHaveLength(1);
  expect(within(valuesInColumn[1]).queryAllByText(/Mission-Y/)).toHaveLength(1);
  expect(within(valuesInColumn[2]).queryAllByText(/Mission-Z/)).toHaveLength(1);
});

// TODO: This may be a false positive - fix this
test("tabbing into the mission name column header and hitting enter once sorts the data in ascending alphabetical order", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const missionNameHeader = screen.getByText("Mission Name");
  userEvent.type(missionNameHeader, "{enter}");

  const valuesInColumn = screen.queryAllByText(/Mission-/);
  expect(within(valuesInColumn[0]).queryAllByText(/Mission-X/)).toHaveLength(1);
  expect(within(valuesInColumn[1]).queryAllByText(/Mission-Y/)).toHaveLength(1);
  expect(within(valuesInColumn[2]).queryAllByText(/Mission-Z/)).toHaveLength(1);
});

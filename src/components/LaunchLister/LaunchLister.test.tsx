import { render, screen, within } from "@testing-library/react";
import { LaunchLister } from "./LaunchLister";
import { LaunchSummary } from "../../models/LaunchSummary";

let launchList: LaunchSummary[];

beforeAll(() => {
  launchList = [
    {
      missionName: "X",
      launchDateUtc: "2017-06-23T19:10:000Z",
      details: "Test details for X",
    },
    {
      missionName: "Y",
      launchDateUtc: "2017-06-24T19:10:000Z",
      details: "Test details for Y",
    },
    {
      missionName: "Z",
      launchDateUtc: "2017-06-25T19:10:000Z",
      details: "Test details for Z",
    },
  ];
});

test("renders a grid to display the list", () => {
  render(<LaunchLister launchList={launchList} />);

  const grid = screen.getByRole("grid");
  expect(grid).toBeInTheDocument();
});

test("renders a header for each column represented in the data", () => {
  render(<LaunchLister launchList={launchList} />);
  const columnHeaders = screen.getAllByRole("columnheader");
  expect(columnHeaders).toHaveLength(3);
});

test("renders right text for each column header", () => {
  render(<LaunchLister launchList={launchList} />);

  const columnHeaders = screen.getAllByRole("columnheader");
  const columnHeaderText = within(columnHeaders[0]).getByText(/Mission Name/);
  expect(columnHeaderText).not.toBeNull();
  // TODO: Check the other columns
});

test("renders grid cells to display the data", () => {
  // agGrid creates elements with the role "gridcell"
  // for each column, for each row of data
  const expectedGridCellCount = launchList.length * 3;

  render(<LaunchLister launchList={launchList} />);

  const grid = screen.getByRole("grid");
  const gridCellCount = within(grid).getAllByRole("gridcell");
  expect(gridCellCount).toHaveLength(expectedGridCellCount);
});

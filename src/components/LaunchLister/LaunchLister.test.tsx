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
    }
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

test("(for illustration purposes) the data is shown in the original order and each row is assigned an ascending index", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const valuesInColumn = screen.queryAllByText(/Mission-/);

  expect(valuesInColumn[0].textContent).toBe("Mission-X"); 
  expect(valuesInColumn[1].textContent).toBe("Mission-Y");
  expect(valuesInColumn[2].textContent).toBe("Mission-Z");

  expect(valuesInColumn[0].parentNode.getAttribute("row-index")).toBe("0");
  expect(valuesInColumn[1].parentNode.getAttribute("row-index")).toBe("1");
  expect(valuesInColumn[2].parentNode.getAttribute("row-index")).toBe("2");

});

test("clicking once on the mission name column header sorts the data in ascending alphabetical order", () => {
  // agGrid doesn't move the elements in the DOM when sorting
  // So they are in the order shown in the mock
  // It just changes the row indices
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const missionNameHeader = screen.getByText("Mission Name");
  userEvent.click(missionNameHeader);

  const valuesInColumn = screen.queryAllByText(/Mission-/);

  // (For illustration purposes) agGrid doesn't actually reorder the DOM elements
  expect(valuesInColumn[0].textContent).toBe("Mission-X");
  expect(valuesInColumn[1].textContent).toBe("Mission-Y");
  expect(valuesInColumn[2].textContent).toBe("Mission-Z");
  
  // It just moves the row indices around
  expect(valuesInColumn[0].parentNode.getAttribute("row-index")).toBe("0");
  expect(valuesInColumn[1].parentNode.getAttribute("row-index")).toBe("1");
  expect(valuesInColumn[2].parentNode.getAttribute("row-index")).toBe("2");
});

test("clicking twice on the mission name column header sorts the data in descending alphabetical order", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const missionNameHeader = screen.getByText("Mission Name");
  userEvent.click(missionNameHeader);
  userEvent.click(missionNameHeader);

  const valuesInColumn = screen.queryAllByText(/Mission-/);

  // (For illustration purposes) agGrid doesn't actually reorder the DOM elements
  expect(valuesInColumn[0].textContent).toBe("Mission-X");
  expect(valuesInColumn[1].textContent).toBe("Mission-Y");
  expect(valuesInColumn[2].textContent).toBe("Mission-Z");
  
  // It just moves the row indices around
  expect(valuesInColumn[0].parentNode.getAttribute("row-index")).toBe("2");
  expect(valuesInColumn[1].parentNode.getAttribute("row-index")).toBe("1");
  expect(valuesInColumn[2].parentNode.getAttribute("row-index")).toBe("0");
});

test("clicking three times on the mission name column header restores the original sort order", () => {
  render(
    <LaunchLister launchList={launchList} setCurrentRocketId={jest.fn()} />
  );

  const missionNameHeader = screen.getByText("Mission Name");
  userEvent.click(missionNameHeader);
  userEvent.click(missionNameHeader);
  userEvent.click(missionNameHeader);

  const valuesInColumn = screen.queryAllByText(/Mission-/);

  // (For illustration purposes) agGrid doesn't actually reorder the DOM elements
  expect(valuesInColumn[0].textContent).toBe("Mission-X");
  expect(valuesInColumn[1].textContent).toBe("Mission-Y");
  expect(valuesInColumn[2].textContent).toBe("Mission-Z");
  
  // It just moves the row indices around
  expect(valuesInColumn[0].parentNode.getAttribute("row-index")).toBe("0");
  expect(valuesInColumn[1].parentNode.getAttribute("row-index")).toBe("1");
  expect(valuesInColumn[2].parentNode.getAttribute("row-index")).toBe("2");
});

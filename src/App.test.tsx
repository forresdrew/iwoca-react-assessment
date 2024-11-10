import { render, waitFor } from "@testing-library/react";
import App from "./App";

let app1;
let app2;

const mockGetApplicationsByIndex = jest.fn();

beforeEach(() => {
  app1 = {
    id: 1,
    first_name: "Sherman",
    last_name: "Gerlach",
    loan_amount: 85268,
    email: "Carroll47@yahoo.com",
    company: "Kulas, Renner and Dietrich",
    date_created: "2021-05-17T17:35:03.200Z",
    expiry_date: "2023-09-23T00:22:03.863Z",
  };

  app2 = {
    id: 4,
    first_name: "Lila",
    last_name: "Volkman",
    loan_amount: 30055,
    email: "Newell_Davis76@hotmail.com",
    company: "Effertz Group",
    date_created: "2021-04-03T22:16:09.898Z",
    expiry_date: "2023-04-02T01:34:08.118Z",
  };

  mockGetApplicationsByIndex
    .mockResolvedValueOnce({
      status: 200,
      data: [app1],
    })
    .mockResolvedValue({
      status: 200,
      data: [app2],
    });
});

jest.mock("./api/ApplicationClient.ts", () => {
  return jest.fn().mockImplementation(() => {
    return { getWeatherByLocation: mockGetApplicationsByIndex };
  });
});

describe("App", () => {
  it("will render", async () => {
    const { queryByTestId } = render(<App />);

    await waitFor(() => expect(queryByTestId("activity-indicator")).toBeNull());
  });

  it("will render all relevant applications", async () => {
    const { queryByTestId } = render(<App />);

    await waitFor(() => expect(queryByTestId("activity-indicator")).toBeNull());
    // imagine an amazing test here
  });

  it("will render new application when Load More is clicked", async () => {
    const { queryByTestId } = render(<App />);

    await waitFor(() => expect(queryByTestId("activity-indicator")).toBeNull());
    // imagine an amazing test here
  });

  it("will show error message when api returns an error code", async () => {
    const { queryByTestId } = render(<App />);

    await waitFor(() => expect(queryByTestId("activity-indicator")).toBeNull());
    // imagine an amazing test here
  });
});

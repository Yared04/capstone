import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingPage from "./components/BookingPage";
import { updateTimes, intializeTimes } from "./components/BookingPage";

test("Renders the BookingPage heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializes times", () => {
  const times = intializeTimes();
  expect(times.length).toBe(7);
  expect(times[0]).toBe("12:00 PM");
  expect(times[1]).toBe("12:30 PM");
});

describe("updateTimes reducer", () => {
  test("should handle SET_TIME action", () => {
    const initialState = null;
    const action = {
      type: "SET_TIME",
      payload: { time: "12:00 PM" },
    };
    const expectedState = { time: "12:00 PM" };

    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(expectedState);
  });

  test("should return the current state for unknown actions", () => {
    const initialState = { time: "12:00 PM" };
    const action = {
      type: "UNKNOWN_ACTION",
      payload: {},
    };

    const newState = updateTimes(initialState, action);

    expect(newState).toEqual(initialState);
  });
});

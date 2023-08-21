import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import Nav from "./Nav";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "SET_TIME":
      return action.payload;
    default:
      return state;
  }
};

export const intializeTimes = () => {
  const date = new Date();
  const availableTimes = api.fetchAPI(date);

  return availableTimes;
};

const BookingPage = () => {
  const [times, setTimes] = useReducer(updateTimes, [], intializeTimes);
  return (
    <>
      <Nav />
      <h1 style={{ marginLeft: "25%" }}>Book Now</h1>
      <BookingForm times={times} dispatchTimes={setTimes} />
    </>
  );
};

export default BookingPage;

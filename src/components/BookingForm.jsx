import React, { useState } from "react";

const BookingForm = ({ times, dispatchTimes }) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [time, setTime] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const reservation = {
      date: date,
      time: time,
      guests: guests,
      occasion: occasion,
    };
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchTimes({ type: "SET_TIME", payload: e.target.value });
  };

  return (
    <>
      <div className="booking">
        <form className="form">
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={time}
            onChange={() => {
              setTime();
            }}
          >
            {times.map((time, idx) => {
              return <option key={idx}>{time}</option>;
            })}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            value={guests}
            onChange={() => {
              setGuests();
            }}
            placeholder="1"
            min="1"
            max="10"
            id="guests"
          />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={() => setOccasion()}>
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
          <button onClick={handleSubmit} className="button">
            Make Your reservation
          </button>{" "}
        </form>
      </div>
    </>
  );
};

export default BookingForm;

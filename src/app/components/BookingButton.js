// src/app/components/BookingButton.js
"use client";
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const BookingButton = ({ property }) => {
  const { addBooking } = useContext(BookingContext);

  return (
    <button onClick={() => addBooking(property)}>Book Now</button>
  );
};

export default BookingButton;

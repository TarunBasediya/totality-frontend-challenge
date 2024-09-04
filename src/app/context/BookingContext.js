// src/app/context/BookingContext.js
"use client";
import React, { createContext, useState } from 'react';

// Create a Context for the booking
export const BookingContext = createContext();

// Create a provider component
export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    paymentInfo: '',
  });

  const addBooking = (property) => {
    setBookings((prevBookings) => [...prevBookings, property]);
  };

  const removeBooking = (propertyId) => {
    setBookings((prevBookings) => prevBookings.filter((property) => property.id !== propertyId));
  };

  const clearBookings = () => {
    setBookings([]);
  };

  const handleCheckout = (details) => {
    setUserDetails(details);
    // Handle checkout process here (e.g., integrate with payment gateway)
    console.log('User Details:', details);
    console.log('Bookings:', bookings);
    // For now, we'll just clear bookings after checkout
    clearBookings();
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, removeBooking, clearBookings, handleCheckout, userDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

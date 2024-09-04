// src/app/components/Header.js
"use client";
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import styles from '../page.module.css';

const Header = () => {
  const { bookings } = useContext(BookingContext);

  return (
    <header className={styles.header}>
      <h1>Property Rental Platform</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/bookings">Bookings ({bookings.length})</a></li>
          <li><a href="/checkout">Checkout</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// src/app/components/Cart.js
"use client";
import React, { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import styles from '../page.module.css';

const Cart = () => {
  const { bookings, removeBooking, clearBookings } = useContext(BookingContext);

  const totalPrice = bookings.reduce((total, property) => total + property.price, 0);

  return (
    <div className={styles.cart}>
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No properties booked yet.</p>
      ) : (
        <div>
          <ul>
            {bookings.map((property) => (
              <li key={property.id}>
                {property.title} - ${property.price}
                <button onClick={() => removeBooking(property.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className={styles.total}>
            <p>Total Price: ${totalPrice}</p>
            <button onClick={clearBookings}>Clear All</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

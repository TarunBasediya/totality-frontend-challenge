// src/app/components/CheckoutForm.js
"use client";
import React, { useState, useContext } from 'react';
import { BookingContext } from '../context/BookingContext';
import styles from '../page.module.css';

const CheckoutForm = () => {
  const { bookings, handleCheckout } = useContext(BookingContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookings.length === 0) {
      alert('No properties booked. Please book a property first.');
      return;
    }
    handleCheckout(formData);
    alert('Checkout successful!');
    // Clear form data after checkout
    setFormData({ name: '', email: '', phone: '', paymentInfo: '' });
  };

  return (
    <div className={styles.checkoutForm}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Payment Info:</label>
          <input
            type="text"
            name="paymentInfo"
            value={formData.paymentInfo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Complete Checkout</button>
      </form>
    </div>
  );
};

export default CheckoutForm;

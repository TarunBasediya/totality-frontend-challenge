// src/app/components/PropertyCard.js
"use client";
import React from 'react';
import BookingButton from './BookingButton';
import styles from '../page.module.css';

const PropertyCard = ({ property }) => {
  return (
    <div className={styles.card}>
      <img src={property.image} alt={property.title} />
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <BookingButton property={property} />
    </div>
  );
};

export default PropertyCard;

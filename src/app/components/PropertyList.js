// src/app/components/PropertyList.js
"use client";
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import styles from '../page.module.css';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({ location: '', priceRange: '', bedrooms: '', amenities: '' });

  useEffect(() => {
    // Fetch property data from the static JSON file
    const fetchData = async () => {
      const data = await fetch('/properties.json');
      const result = await data.json();
      setProperties(result);
    };

    fetchData();
  }, []);

  const applyFilters = () => {
    // Logic to filter properties based on selected filters
  };

  return (
    <div className={styles.list}>
      <h2>Available Properties</h2>
      <div className={styles.filters}>
        {/* Implement filters here */}
      </div>
      <div className={styles.properties}>
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;

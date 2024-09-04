// src/app/page.js
import React from 'react';
import Header from './components/Header';
import PropertyList from './components/PropertyList';

export default function Home() {
  return (
    <div>
      <Header />
      <PropertyList />
    </div>
  );
}

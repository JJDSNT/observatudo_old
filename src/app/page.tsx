'use client'
import React, { useState, useEffect } from 'react';
import DropdownCombo from './components/DropdownCombo';
import Eixos from './components/Eixos';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ObservaTudo</h1>
      <div className="bg-gray-200 p-4 rounded-lg">
        <DropdownCombo  />
      </div>
      <br />
      <div id="eixos" className="row g-2 text-tahiti">
        <Eixos />
    </div>
    </div>
  );
};

export default Home;

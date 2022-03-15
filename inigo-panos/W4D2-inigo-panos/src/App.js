/* eslint-disable no-unused-vars */
import './App.css';
import React from 'react';
import { Info } from './components/info';
import { Gentlemen } from './components/gentleman';

export function App() {
  return (
    <>
      <div className="container">
        <Info />
        <Gentlemen />
      </div>
    </>
  );
}

export default App;

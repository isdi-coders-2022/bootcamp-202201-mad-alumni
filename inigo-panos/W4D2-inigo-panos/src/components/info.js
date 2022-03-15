/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import { Gentlemen } from './gentleman';
import { CABALLEROS } from './gentlemen.data';

export function Info() {
  //this.numberOfPointingGentlemen = Gentlemen;

  return (
    <>
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <p className="info">{CABALLEROS.length} gentlemen pointing at you</p>
        <button className="button button--select">Select all</button>
      </section>
    </>
  );
}

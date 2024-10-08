//import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import Header from '../components/Header/Header.jsx'
import Button from '../components/Button/Button.jsx'

export function Start() {
  function onStart() {
    console.log("Start")
  }

  return (
    <div className="App">
      <div className="background-image"></div>
      <Header />
      <Link to="/registration1">
        <Button id='start-button' text="Start" onClick={onStart} />
      </Link>
    </div>
  );
}
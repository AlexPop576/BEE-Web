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
      <Button id='start-button' active={1} text="Start" onClick={onStart} page={"/registration1"}/>
    </div>
  );
}
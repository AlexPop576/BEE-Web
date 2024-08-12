import { useState } from 'react';

import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Start} from './Pages/start';
import { Registration1 } from './Pages/registration1';
import { Registration2 } from './Pages/registration2';
import { Registration3 } from './Pages/registration3';
import { Vote1 } from './Pages/vote1';
import { Vote2 } from './Pages/vote2';
import { Final } from './Pages/final';

function App() {

  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Start/>}/>
        <Route path = "/registration1" element = {<Registration1/>}/>
        <Route path = "/registration2" element = {<Registration2/>}/>
        <Route path = "/registration3" element = {<Registration3/>}/>
        <Route path = "/vote1" element = {<Vote1/>}/>
        <Route path = "/vote2" element = {<Vote2/>}/>
        <Route path = "/final" element = {<Final/>}/>
      </Routes>
    </Router>
  );
}

export default App;

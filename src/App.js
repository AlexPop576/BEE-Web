import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {Start} from './Pages/start';
import { Registration1 } from './Pages/registration1';
import { Registration2 } from './Pages/registration2';
import { Registration3 } from './Pages/registration3';
import { Vote1 } from './Pages/vote1';
import { Vote2 } from './Pages/vote2';
import { Final } from './Pages/final';
import { Help } from './Pages/help';
import { HelpKeyboard } from './Pages/help_keyboard';
import { VoteTable } from './Pages/vote_table';

export let partyList = [{ party: "Partidul Poporului", name: "Agamemnon Dandanache" },{ party: "Aurora Economică Română", name: "Nae Cațavencu" }, { party: "Partidului Progresului", name: "Tase Fandoseanu" }, { party: "Liga Sincerității și Adevărului", name: "Ionel Buimăceanu" }, { party: "Coaliția pentru Unire și Învârtire", name: "Ștefan Pleșuvanu" }, { party: "Asociația Vorbelor fară Fapte", name: "Fane Cotcodac" }]

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
        <Route path = "/help" element = {<Help/>}/>
        <Route path = "/helpkeyboard" element = {<HelpKeyboard/>}/>
        <Route path = "/votetable" element = {<VoteTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;

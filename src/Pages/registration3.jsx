import { Link } from 'react-router-dom';
import Button from '../components/Button/Button.jsx'
import AppBar from '../components/AppBar/AppBar.jsx';
import LiveFeed from '../components/LiveFeed/LiveFeed.jsx';
import axios from 'axios';

export function Registration3() {
    const stopCamera =  () => {
        try {
          axios.get('http://localhost:5000/stop-camera', { responseType: 'blob' });
          console.log('stop')
        } catch (err) {
          console.error("Error starting image:", err);
        }
      };

    

    return (
        <div className="App">
               <AppBar index={2} activeSteps = {3}/>
                <p className='instructions'>Verificare identitate</p>
                <LiveFeed/>
                
        </div>
    );
    //<Button text="Continuă" active={1} page="/vote1"/>
}
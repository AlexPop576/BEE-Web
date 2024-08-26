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
            <ul>
               <AppBar index={2} activeSteps = {3}/>
                <ul className='instructions'>Verificare identitate</ul>
                <LiveFeed/>
                <Link to="/vote1">
                    <Button text="Continuă" onClick = {stopCamera} />
                </Link>
            </ul>
        </div>
    );
}